import { useCallback, useEffect, useRef } from "preact/hooks"

import { useLatest } from "./useLatest"

interface IntervalOptions {
  listener: (stop: () => void) => void
  fps: number
}

export const useInterval = ({ listener, fps }: IntervalOptions) => {
  const listenerRef = useLatest(listener)
  const interval = useRef<number>()

  const stop = useCallback(() => {
    clearInterval(interval.current)
    interval.current = undefined
  }, [])

  const start = useCallback(() => {
    if (interval.current != null) stop()

    const intervalId = setInterval(() => {
      listenerRef.current(stop)
    }, 1000 / fps)

    interval.current = intervalId as unknown as number
  }, [fps, listenerRef, stop])

  useEffect(() => {
    start()
    return stop
  }, [start, stop])

  return { start, stop }
}
