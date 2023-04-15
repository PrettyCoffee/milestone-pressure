import { useCallback, useState } from "preact/hooks"

const STORAGE = window.localStorage || {}

const parseStorage = <T>(key: string) => {
  const stringValue = STORAGE.getItem(key)
  if (stringValue == null) return null

  try {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return JSON.parse(stringValue) as T
  } catch {
    return null
  }
}

const initiateStorage = <T>(key: string, initialValue: T) => {
  const value = parseStorage<T>(key)
  if (value != null) return value

  STORAGE.setItem(key, JSON.stringify(initialValue))
  return initialValue
}

const prefix = "miles-"

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [value, setValue] = useState(
    initiateStorage(prefix + key, initialValue)
  )

  const setStorage = useCallback(
    (value: T) => {
      STORAGE.setItem(prefix + key, JSON.stringify(value))
      setValue(value)
    },
    [key]
  )

  return [value, setStorage]
}
