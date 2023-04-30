import { Fragment } from "preact"

import { useMemo, useState } from "preact/hooks"

import { useTimer } from "hooks"
import { MilestoneLeaf } from "page/data"
import { NodeStatus, NodeWithStatus } from "page/Page"

import styles from "./milestone-table.module.css"
import { Check, Icon, IconDefinition, Circle, Play } from "../icon"
import { Table } from "../table"
import { Timer } from "../timer"

export interface Milestone extends MilestoneLeaf {
  start: Date
  status: NodeStatus
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

const useMilestone = ({ label, deadline, status }: Milestone): TableData => {
  const date = useMemo(() => parseDate(deadline), [deadline])

  const timeLeft = useTimer({
    endDate: deadline,
    fps: 1,
  })

  return {
    status,
    label,
    timeLeft,
    deadline: date,
  }
}

const statusIcon: Record<TableData["status"], IconDefinition | undefined> = {
  current: Play,
  inProgress: Circle,
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
      <div style={{ paddingLeft: `${level}rem` }}>
        {Array.from({ length: level }, (_, index) => (
          <span
            key={index}
            className={styles.idleLine}
            style={{ "--index": index }}
          />
        ))}
        <div className={styles.timeline} data-status={status}>
          {icon && <Icon icon={icon} size="sm" />}
          <span className={styles.statusLine} />
          {groupEnd ? (
            <span
              className={styles.groupEndLine}
              style={{ "--groupEndLevels": groupEndLevels }}
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
}
const LabelCell = ({ label }: LabelCellProps) => (
  <Table.Cell align="start">{label}</Table.Cell>
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

  return (
    <Table.Row
      data-status={status}
      data-has-parent={level !== 0}
      data-row-type="leaf"
      data-group-end={groupEnd}
      style={{ "--level": level }}
    >
      <StatusCell
        groupEnd={groupEnd}
        groupEndLevels={groupEndLevels}
        level={level}
        status={status}
      />
      <LabelCell label={label} />
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
    data-status={status}
    data-has-parent={level !== 0}
    data-row-type="branch"
    style={{ "--level": level }}
  >
    <StatusCell
      groupEnd={false}
      groupEndLevels={0}
      level={level}
      status={status}
    />
    <LabelCell label={label} />
    <Table.Cell />
    <Table.Cell />
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
            level={level}
            groupEnd={groupEnd}
            groupEndLevels={groupEndLevels}
            {...node}
            start={node.start ?? new Date(0)}
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
