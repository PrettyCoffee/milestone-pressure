import { joinClassNames } from "components/utils/joinClassNames"

import styles from "./theme-toggle.module.css"

interface ThemeToggleProps {
  current: string
  options: string[]
  onChange: (name: string) => void
}

interface ThemeBubblesProps {
  theme: string
}
const ThemeBubbles = ({ theme }: ThemeBubblesProps) => (
  <div className={joinClassNames(styles.bubbles, theme)}>
    <span />
    <span />
    <span />
  </div>
)

export const ThemeToggle = ({
  current,
  options,
  onChange,
}: ThemeToggleProps) => (
  <div className={styles.wrapper}>
    <div className={styles.themeOption} role="radio" aria-checked>
      <ThemeBubbles theme={current} />
      <span className="visually-hidden">
        Currently selected theme: {current}
      </span>
    </div>

    {options
      .filter(option => option !== current)
      .sort()
      .map(name => (
        <button
          key={name}
          className={joinClassNames(styles.themeOption)}
          role="radio"
          aria-checked={current === name}
          onClick={() => onChange(name)}
        >
          <ThemeBubbles theme={name} />

          <span className="visually-hidden">Change theme to {name}</span>
        </button>
      ))}
  </div>
)
