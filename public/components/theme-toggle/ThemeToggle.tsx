import { joinClassNames } from "components/utils/joinClassNames"

import styles from "./theme-toggle.module.css"

interface ThemeToggleProps {
  current: string
  options: string[]
  onChange: (name: string) => void
}

const sortOptions = (options: string[], current: string) => {
  const sorted = options.sort((a, b) => {
    if (a === current) return -1
    if (b === current) return 1
    return a < b ? -1 : 1
  })
  console.log(sorted)
  return sorted
}

export const ThemeToggle = ({
  current,
  options,
  onChange,
}: ThemeToggleProps) => (
  <div className={styles.wrapper}>
    {sortOptions(options, current).map(name => (
      <button
        key={name}
        className={joinClassNames(styles.button)}
        role="radio"
        aria-checked={current === name}
        onClick={() => onChange(name)}
      >
        <div className={joinClassNames(styles.bubbles, name)}>
          <span />
          <span />
          <span />
        </div>

        <span className="visually-hidden">Change theme to {name}</span>
      </button>
    ))}
  </div>
)
