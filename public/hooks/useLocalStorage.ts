import { useCallback, useState } from "preact/hooks"

const PREFIX = "miles-"

const STORAGE = {
  setItem: <T>(key: string, value: T) => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  getItem: <T>(key: string) => {
    if (typeof window === "undefined") return null

    const stringValue = window.localStorage.getItem(key)
    if (stringValue == null) return null

    try {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return JSON.parse(stringValue) as T
    } catch {
      return null
    }
  },
}

const initiateStorage = <T>(key: string, initialValue: T) => {
  const value = STORAGE.getItem<T>(key)
  if (value != null) return value

  STORAGE.setItem(key, initialValue)
  return initialValue
}

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [value, setValue] = useState(
    initiateStorage(PREFIX + key, initialValue)
  )

  const setStorage = useCallback(
    (value: T) => {
      STORAGE.setItem(PREFIX + key, value)
      setValue(value)
    },
    [key]
  )

  return [value, setStorage]
}
