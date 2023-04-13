import { useMemo } from "preact/hooks"

import { Check, Close, Icon, IconDefinition, Crosshair } from "components/icon"
import { Timer } from "components/timer"
import { useTimer } from "hooks"

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
  status: "success" | "failed" | "current" | "none"
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
    status: timeLeft <= 0 ? "success" : inProgress ? "current" : "none",
    label,
    timeLeft,
    deadline: date,
  }
}

const statusIcon: Record<TableData["status"], IconDefinition | undefined> = {
  current: Crosshair,
  failed: Close,
  success: Check,
  none: undefined,
}
const Row = (props: Milestone) => {
  const { status, label, timeLeft, deadline } = useMilestone(props)

  const classNames = []
  if (timeLeft <= 0) classNames.push("finished")
  // eslint-disable-next-line react/destructuring-assignment
  if (props.current) classNames.push("current")

  const icon = statusIcon[status]
  return (
    <tr className={classNames.join(" ")}>
      <td data-type="timeline" data-status={status}>
        {icon && <Icon icon={icon} size="sm" />}
      </td>
      <td data-type="text">{label}</td>
      <td data-type="date">{deadline}</td>
      <td data-type="timer">
        {timeLeft > 0 ? <Timer time={timeLeft} style="short" /> : "-"}
      </td>
    </tr>
  )
}

const Headers = () => (
  <tr>
    <th className="visually-hidden" data-type="timeline">
      Status
    </th>
    <th data-type="text">Label</th>
    <th data-type="date">Deadline</th>
    <th data-type="timer">Time left</th>
  </tr>
)

interface MilestoneTableProps {
  milestones: Milestone[]
}

export const MilestoneTable = ({ milestones }: MilestoneTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <Headers />
      </thead>
      <tbody>
        {milestones.map(milestone => (
          <Row key={milestone.id} {...milestone} />
        ))}
      </tbody>
    </table>
  )
}
