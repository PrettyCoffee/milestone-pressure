import styles from "./timer.module.css"
import { DateSegmentName } from "./utils/getDateSegments"
import { useTimer } from "./utils/useTimer"

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
        <span key={index} class={styles.digit}>
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
  <span class={`${styles.delimiter} ${blink ? styles.blink : ""}`}>
    {value}
  </span>
)

interface TimerProps {
  label: string
  endDate: Date
}

export const Timer = ({ endDate, label }: TimerProps) => {
  const { days, hours, minutes, seconds, milliseconds } = useTimer({
    endDate,
    fps: 60,
  })

  return (
    <div class={styles.wrapper}>
      <div class={styles.label}>{label}</div>
      <div class={styles.timer} style={{ color: getColor(days, hours) }}>
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
    </div>
  )
}
