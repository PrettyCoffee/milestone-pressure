import { Fragment } from "preact"

import { useMemo, useState } from "preact/hooks"

import { Check, Icon, IconDefinition, Crosshair } from "components/icon"
import { Table } from "components/table"
import { Timer } from "components/timer"
import { useTimer } from "hooks"
import { NodeStatus, NodeWithStatus } from "page/Page"

import styles from "./milestone-table.module.css"

export interface Milestone {
  id: string
  deadline: Date
  start: Date
  label: string
  current: boolean
}
const isInProgress = ([start, end]: [Date, Date], fallback = false) => {
  const now = Date.now()
  const didStart = start.valueOf() - now <= 0
  const isNotFinished = end.valueOf() - now > 0

  return (
    (isNotFinished && didStart && start.valueOf() !== 0) ||
    (start.valueOf() === 0 && fallback) // if start was not defined, use the fallback
  )
}

interface TableData {
  status: NodeStatus
  label: string
  timeLeft: number
  deadline: string
}

const parseDate = (date: Date) =>
  date.toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

const useMilestone = ({
  label,
  deadline,
  start,
  current,
}: Milestone): TableData => {
  const date = useMemo(() => parseDate(deadline), [deadline])

  const timeLeft = useTimer({
    endDate: deadline,
    fps: 1,
  })

  const inProgress = isInProgress([start, deadline], current)

  return {
    status: timeLeft <= 0 ? "finished" : inProgress ? "current" : "none",
    label,
    timeLeft,
    deadline: date,
  }
}

const statusIcon: Record<TableData["status"], IconDefinition | undefined> = {
  current: Crosshair,
  running: Crosshair,
  finished: Check,
  none: undefined,
}
interface StatusCellProps {
  status: NodeStatus
  level: number
  groupEnd: boolean
  groupEndLevels: number
}
const StatusCell = ({
  level,
  status,
  groupEnd,
  groupEndLevels,
}: StatusCellProps) => {
  const icon = statusIcon[status]
  return (
    <Table.Cell align="center">
      <div style={{ paddingLeft: `calc(${level} * 1rem)` }}>
        {Array.from({ length: level }, (_, index) => (
          <span
            key={index}
            className={styles.idleLine}
            style={{ left: `calc(${index + 1} * 1rem + 0.2rem)` }}
          />
        ))}
        <div className={styles.timeline} data-status={status}>
          {icon && <Icon icon={icon} size="sm" />}
          <span className={styles.statusLine} />
          {groupEnd ? (
            <span
              className={styles.groupEndLine}
              style={{ width: `${groupEndLevels + 0.425}rem` }}
            />
          ) : (
            <span className={styles.statusLine} />
          )}
        </div>
      </div>
    </Table.Cell>
  )
}

interface LabelCellProps {
  label: string
  level: number
}
const LabelCell = ({ level, label }: LabelCellProps) => (
  <Table.Cell align="start">
    <div style={{ paddingLeft: `calc(${level} * 0rem)` }}>{label}</div>
  </Table.Cell>
)

const MilestoneRow = ({
  level,
  groupEnd,
  groupEndLevels,
  ...props
}: Milestone & {
  level: number
  groupEnd: boolean
  groupEndLevels: number
}) => {
  const { status, label, timeLeft, deadline } = useMilestone(props)

  const classNames = []
  if (status === "finished") classNames.push("finished")
  // eslint-disable-next-line react/destructuring-assignment
  if (props.current) classNames.push("current")

  return (
    <Table.Row
      data-has-parent={level !== 0}
      data-row-type="leaf"
      data-group-end={groupEnd}
      className={classNames.join(" ")}
    >
      <StatusCell
        groupEnd={groupEnd}
        groupEndLevels={groupEndLevels}
        level={level}
        status={status}
      />
      <LabelCell level={level} label={label} />
      <Table.Cell align="center">{deadline}</Table.Cell>
      <Table.Cell align="end">
        {timeLeft > 0 ? <Timer time={timeLeft} style="short" /> : "-"}
      </Table.Cell>
    </Table.Row>
  )
}

const GroupRow = ({
  level,
  status,
  label,
}: NodeWithStatus & { level: number }) => (
  <Table.Row
    className={status === "finished" ? "finished" : ""}
    data-has-parent={level !== 0}
    data-row-type="branch"
  >
    <StatusCell
      groupEnd={false}
      groupEndLevels={0}
      level={level}
      status={status}
    />
    <LabelCell level={level} label={label} />
    <Table.Cell>{""}</Table.Cell>
    <Table.Cell>{""}</Table.Cell>
  </Table.Row>
)

interface RowsProps {
  nodes: NodeWithStatus[]
  level?: number
  groupEndLevels?: number
}
const Rows = ({ nodes, level = 0, groupEndLevels = 0 }: RowsProps) => {
  const [expanded] = useState<string[]>(nodes.map(({ id }) => id))

  return (
    <>
      {nodes.map((node, index) => {
        const groupEnd = level > 0 && index === nodes.length - 1
        if ("items" in node)
          return (
            <Fragment key={node.id}>
              <GroupRow level={level} {...node} />
              {!expanded.includes(node.id) ? null : (
                <Rows
                  nodes={node.items}
                  level={level + 1}
                  groupEndLevels={groupEnd ? groupEndLevels + 1 : 0}
                />
              )}
            </Fragment>
          )

        return (
          <MilestoneRow
            key={node.id}
            groupEnd={groupEnd}
            current={node.status === "current"}
            start={node.start ?? new Date(0)}
            level={level}
            groupEndLevels={groupEndLevels}
            {...node}
          />
        )
      })}
    </>
  )
}

const Headers = () => (
  <Table.Row>
    <Table.Cell header align="center" className="visually-hidden">
      Status
    </Table.Cell>
    <Table.Cell header align="start">
      Label
    </Table.Cell>
    <Table.Cell header align="center">
      Deadline
    </Table.Cell>
    <Table.Cell header align="end">
      Time left
    </Table.Cell>
  </Table.Row>
)

interface MilestoneTableProps {
  milestones: NodeWithStatus[]
}

export const MilestoneTable = ({ milestones }: MilestoneTableProps) => (
  <Table.Root className={styles.table}>
    <Table.Header>
      <Headers />
    </Table.Header>
    <Table.Body>
      <Rows nodes={milestones} groupEndLevels={0} />
    </Table.Body>
  </Table.Root>
)
