import { joinClassNames } from "components/utils/joinClassNames"

import styles from "./theme-toggle.module.css"

interface ThemeToggleProps {
  current: string
  options: string[]
  onChange: (name: string) => void
}

export const ThemeToggle = ({
  current,
  options,
  onChange,
}: ThemeToggleProps) => (
  <div className={styles.wrapper}>
    {options.map(name => (
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
