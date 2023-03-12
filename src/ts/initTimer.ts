import { createTimer } from "./createTimer"

const HOUR_IN_MILLISECONDS = 1000 * 60 * 60
const WARNING = 8 * HOUR_IN_MILLISECONDS

export const initTimer = (label: string, deadline: string) => {
  const { timer, updateTime } = createTimer(label, deadline)
  document.body.append(timer)

  const interval = setInterval(() => {
    const diff = new Date(deadline).valueOf() - Date.now()

    updateTime()

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
