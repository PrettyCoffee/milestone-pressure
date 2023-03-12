import { DateTimer } from "./DateTimer"
import { getDateSegments } from "./getDateSegments"
import { keysOf } from "./utils"

const createWrapper = () => {
  const wrapper = document.createElement("div")
  wrapper.classList.add("timer-wrapper")
  return wrapper
}

const createLabel = (text: string) => {
  const label = document.createElement("div")
  label.classList.add("label")
  label.innerText = text
  return label
}

const millisecondsUntilDate = (date: Date) => date.valueOf() - Date.now()

const updateTimer = (timer: DateTimer, deadline: Date) => {
  const milliseconds = millisecondsUntilDate(deadline)
  const segments = getDateSegments(milliseconds)
  keysOf(segments).forEach(key =>
    timer.setAttribute(key, String(segments[key]))
  )
}

export const createTimer = (labelText: string, deadline: string) => {
  const date = new Date(deadline)
  if (Number.isNaN(date.valueOf()))
    throw new Error(
      `The milestone date ${
        deadline || "<undefined>"
      } has no valid date format.`
    )

  const timer = new DateTimer()
  updateTimer(timer, date)

  const label = createLabel(labelText)
  const wrapper = createWrapper()

  wrapper.append(label, timer)

  return {
    timer: wrapper,
    updateTime: () => {
      updateTimer(timer, date)
    },
  }
}
