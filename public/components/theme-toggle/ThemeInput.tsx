import styles from "./theme-toggle.module.css"
import { joinClassNames } from "../utils/joinClassNames"

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
type InputChangeHandler = JSX.HTMLAttributes<HTMLInputElement>["onChange"]

interface ThemeInputProps {
  theme: string
  checked: boolean
  onChange: (theme: string) => void
  groupName: string
}
export const ThemeInput = ({
  theme,
  checked,
  groupName,
  onChange,
}: ThemeInputProps) => {
  const handleChange: InputChangeHandler = ({ currentTarget }) =>
    currentTarget.checked && onChange(theme)

  const classNames = [styles.themeOption]
  if (checked) classNames.push(styles.current)

  return (
    <label className={joinClassNames(...classNames)}>
      <input
        type="radio"
        className="visually-hidden"
        checked={checked}
        name={groupName}
        onChange={handleChange}
      />
      <ThemeBubbles theme={theme} />
      <span className={styles.label}>{theme}</span>
    </label>
  )
}
