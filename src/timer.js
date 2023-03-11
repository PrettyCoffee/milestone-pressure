const DEADLINE = new Date("2023-03-12T00:00:00")

const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

const HOUR_IN_MILLISECONDS = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR
const WARNING = 8 * HOUR_IN_MILLISECONDS

const parseDateDiff = (diffInMilliseconds) => {
  const diffInSeconds = diffInMilliseconds / MILLISECONDS_PER_SECOND;
  const diffInMinutes = diffInSeconds / SECONDS_PER_MINUTE;
  const diffInHours = diffInMinutes / MINUTES_PER_HOUR;

  return {
    days: Math.floor(diffInHours / HOURS_PER_DAY),
    hours: Math.floor(diffInHours % HOURS_PER_DAY),
    minutes: Math.floor(diffInMinutes % SECONDS_PER_MINUTE),
    seconds: Math.floor(diffInSeconds % SECONDS_PER_MINUTE),
    milliseconds: Math.floor(diffInMilliseconds % MILLISECONDS_PER_SECOND)
  };
}


const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  milliseconds: document.getElementById("milliseconds"),

  timer: document.getElementsByClassName("timer")[0]
}

const stringPad = {
  days: 1,
  hours: 2,
  minutes: 2,
  seconds: 2,
  milliseconds: 3
}

const formatTime = (diff, key) => {
  const value = Math.max(0, diff[key])
  return String(value).padStart(stringPad[key], "0")
}

const updateTime = (diff) =>
  Object.keys(diff).forEach(
    key => {
      const currentText = elements[key].innerText
      const newText = formatTime(diff, key)

      if (currentText !== newText) {
        elements[key].innerText = formatTime(diff, key)
      }
    }
  )

const interval = setInterval(() => {
  const diff = DEADLINE - new Date()
  const parsedDiff = parseDateDiff(diff)
  updateTime(parsedDiff)

  if(diff <= WARNING) {
    const timerStyle = elements.timer.style
    if(timerStyle.getPropertyValue("color") === "")
      timerStyle.setProperty("color", "var(--red)") 
  }

  if(diff <= 0) {
    clearInterval(interval)
    document.title = "💥 KABOOM 💥"
  }
}, 10)
