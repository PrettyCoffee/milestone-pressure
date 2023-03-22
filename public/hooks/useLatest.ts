import { useEffect, useRef } from "preact/hooks"

export const useLatest = <T>(value: T) => {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref
}
