import { useId } from "preact/hooks"

import styles from "./theme-toggle.module.css"
import { ThemeInput } from "./ThemeInput"

interface ThemeToggleProps {
  current: string
  options: string[]
  onChange: (name: string) => void
}

export const ThemeToggle = ({
  current,
  options,
  onChange,
}: ThemeToggleProps) => {
  const groupId = useId()

  return (
    <div className={styles.wrapper}>
      {options.sort().map(theme => (
        <ThemeInput
          key={theme}
          theme={theme}
          checked={current === theme}
          groupName={groupId}
          onChange={onChange}
        />
      ))}
    </div>
  )
}
