import { Timer } from "components/timer"
import { useTimer } from "hooks"

import styles from "./huge-timer.module.css"

interface HugeTimerProps {
  label: string
  endDate: Date
}

export const HugeTimer = ({ endDate, label }: HugeTimerProps) => {
  const leftTime = useTimer({
    endDate,
    fps: 60,
  })

  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.label}>{label}</div>
      <Timer time={leftTime} className={styles.timer} style="long" />
    </div>
  )
}
