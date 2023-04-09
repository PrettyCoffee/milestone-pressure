import { Timer } from "components/timer"

import styles from "./huge-timer.module.css"

interface HugeTimerProps {
  label: string
  endDate: Date
}

export const HugeTimer = ({ endDate, label }: HugeTimerProps) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.label}>{label}</div>
      <Timer className={styles.timer} endDate={endDate} style="long" />
    </div>
  )
}
