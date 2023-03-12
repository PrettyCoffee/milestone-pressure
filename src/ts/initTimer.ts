import { DateTimer } from "./DateTimer"
import { getDateSegments, DateSegments } from "./getDateSegments"
import { keysOf } from "./utils"

const HOUR_IN_MILLISECONDS = 1000 * 60 * 60
const WARNING = 8 * HOUR_IN_MILLISECONDS

const timer = document.getElementById("timer") as DateTimer

const updateTime = (diff: DateSegments) =>
  keysOf(diff).forEach(key => {
    const newValue = String(diff[key])
    timer.setAttribute(key, newValue)
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
