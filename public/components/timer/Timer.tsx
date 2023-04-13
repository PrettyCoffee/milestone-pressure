import { getDateSegments, DateSegmentName } from "./getDateSegments"
import styles from "./timer.module.css"

const getColor = (days: number, hours: number) => {
  if (days > 2) return "var(--text)"
  if (days > 1) return "var(--rosewater)"
  if (days > 0) return "var(--yellow)"
  if (hours > 16) return "var(--peach)"
  if (hours > 8) return "var(--maroon)"
  return "var(--red)"
}

const stringPad: Record<DateSegmentName, number> = {
  days: 1,
  hours: 2,
  minutes: 2,
  seconds: 2,
  milliseconds: 3,
}

const formatTimeSegment = (type: DateSegmentName, value: number) =>
  String(Math.max(0, value)).padStart(stringPad[type], "0")

interface SegmentProps {
  type: DateSegmentName
  value: number
}

const Segment = ({ type, value }: SegmentProps) => {
  const displayValue = formatTimeSegment(type, value)

  return (
    <>
      {[...displayValue].map((digit, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index} className="digit">
          {digit}
        </span>
      ))}
    </>
  )
}

interface DelimiterProps {
  value: string
  blink?: boolean
}

const Delimiter = ({ value, blink }: DelimiterProps) => (
  <span className={`${styles.delimiter} ${blink ? styles.blink : ""}`}>
    {value}
  </span>
)

interface TimerProps {
  time: number
  style?: "short" | "long"
  className?: string
}

export const Timer = ({
  time,
  style = "short",
  className = "",
}: TimerProps) => {
  const { days, hours, minutes, seconds, milliseconds } = getDateSegments(time)

  if (style === "short")
    return (
      <div
        className={`${styles.timer} ${className}`}
        style={{ color: getColor(days, hours) }}
      >
        <Segment type="days" value={days} />
        <Delimiter value="d" />
        <Segment type="hours" value={hours} />
        <Delimiter value="h" />
        <Segment type="minutes" value={minutes} />
        <Delimiter value="m" />
      </div>
    )

  return (
    <div
      className={`${styles.timer} ${className}`}
      style={{ color: getColor(days, hours) }}
    >
      <Segment type="days" value={days} />
      <Delimiter value="d" />
      <Segment type="hours" value={hours} />
      <Delimiter value=":" blink />
      <Segment type="minutes" value={minutes} />
      <Delimiter value=":" blink />
      <Segment type="seconds" value={seconds} />
      <Delimiter value="." blink />
      <Segment type="milliseconds" value={milliseconds} />
    </div>
  )
}
