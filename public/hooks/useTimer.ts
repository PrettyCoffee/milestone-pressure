import { useEffect, useState } from "preact/hooks"

import { useInterval } from "hooks/useInterval"

const millisecondsUntilDate = (date: Date) => date.valueOf() - Date.now()

interface TimerOptions {
  endDate: Date
  fps: number
}

export const useTimer = ({ endDate, fps }: TimerOptions) => {
  const [leftTime, setLeftTime] = useState(millisecondsUntilDate(endDate))

  const { start } = useInterval({
    fps,
    listener: stop => {
      const diff = endDate.valueOf() - Date.now()
      setLeftTime(diff)

      if (diff <= 0) stop()
    },
  })

  useEffect(() => {
    console.log(endDate)
    // restart if date is changed
    start()
  }, [endDate, start])

  return leftTime
}
