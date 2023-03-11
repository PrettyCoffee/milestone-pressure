import { getDateSegments, DateSegmentName, DateSegments } from "./getDateSegments"

const HOUR_IN_MILLISECONDS = 1000 * 60 * 60
const WARNING = 8 * HOUR_IN_MILLISECONDS

const elements: Record<DateSegmentName | "timer", HTMLElement | null> = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  milliseconds: document.getElementById("milliseconds"),

  timer: document.getElementsByClassName("timer")[0] as HTMLElement | null
}

const stringPad: Record<DateSegmentName, number> = {
  days: 1,
  hours: 2,
  minutes: 2,
  seconds: 2,
  milliseconds: 3
}

const formatTimeSegment = (diff: DateSegments, key: DateSegmentName) => {
  const value = Math.max(0, diff[key])
  return String(value).padStart(stringPad[key], "0")
}

const updateTime = (diff: DateSegments) =>
  Object.keys(diff).forEach(
    (_) => {
      const key = _ as DateSegmentName
      const segment = elements[key]
      if(!segment) return

      const currentText = segment.innerText
      const newText = formatTimeSegment(diff, key)

      if (currentText !== newText) {
        segment.innerText = formatTimeSegment(diff, key)
      }
    }
  )

export const initTimer = (deadline: Date) => {
  const interval = setInterval(() => {
    const diff = deadline.valueOf() - Date.now()
    const parsedDiff = getDateSegments(diff)
    updateTime(parsedDiff)
  
    if(diff <= WARNING) {
      const timerStyle = elements.timer?.style
      if(timerStyle?.getPropertyValue("color") === "")
        timerStyle?.setProperty("color", "var(--red)") 
    }
  
    if(diff <= 0) {
      clearInterval(interval)
      document.title = "💥 KABOOM 💥"
    }
  }, 10)
}
