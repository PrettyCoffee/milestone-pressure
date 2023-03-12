import { DateTimer } from "./DateTimer"
import {
  getDateSegments,
  DateSegmentName,
  DateSegments,
} from "./getDateSegments"

const HOUR_IN_MILLISECONDS = 1000 * 60 * 60
const WARNING = 8 * HOUR_IN_MILLISECONDS

const timer = document.getElementById("timer") as DateTimer

const updateTime = (diff: DateSegments) =>
  Object.keys(diff).forEach(_ => {
    const key = _ as DateSegmentName

    const currentValue = timer[key]
    const newValue = diff[key]

    if (currentValue !== newValue) {
      timer.setAttribute(key, String(newValue))
    }
  })

export const initTimer = (deadline: Date) => {
  const interval = setInterval(() => {
    const diff = deadline.valueOf() - Date.now()
    const parsedDiff = getDateSegments(diff)
    updateTime(parsedDiff)

    if (diff <= WARNING) {
      const timerStyle = timer.style
      if (timerStyle.getPropertyValue("color") === "")
        timerStyle.setProperty("color", "var(--red)")
    }

    if (diff <= 0) {
      clearInterval(interval)
      document.title = "💥 KABOOM 💥"
    }
  }, 10)
}
