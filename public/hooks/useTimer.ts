import { useState } from "preact/hooks"

import { useInterval } from "hooks"

const millisecondsUntilDate = (date: Date) => date.valueOf() - Date.now()

interface TimerOptions {
  endDate: Date
  fps: number
}

export const useTimer = ({ endDate, fps }: TimerOptions) => {
  const [leftTime, setLeftTime] = useState(millisecondsUntilDate(endDate))

  useInterval({
    fps,
    listener: stop => {
      const diff = endDate.valueOf() - Date.now()
      setLeftTime(diff)

      if (diff <= 0) stop()
    },
  })

  return leftTime
}
