import { useId } from "preact/hooks"

import styles from "./theme-toggle.module.css"
import { ThemeInput } from "./ThemeInput"

const hexToNumber = (hex: string) => Number(`0x${hex}`)

const splitHexColor = ([, ...hex]: string) => ({
  r: hex[0] + hex[1],
  g: hex[2] + hex[3],
  b: hex[4] + hex[5],
})

const getThemeVarValue = (theme: string, varName: string) => {
  const span = document.createElement("span")
  span.className = theme
  document.body.appendChild(span)
  return window.getComputedStyle(span).getPropertyValue(varName)
}

const sortByLightness = (themes: string[]) => {
  const withWeight = themes.map(theme => {
    const base = getThemeVarValue(theme, "--base")
    const { r, g, b } = splitHexColor(base)

    return {
      theme,
      weight: hexToNumber(r) + hexToNumber(g) + hexToNumber(b),
    }
  })

  return withWeight
    .sort((a, b) => (a.weight > b.weight ? 1 : -1))
    .map(({ theme }) => theme)
}

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
  const labelId = `theme-toggle-${groupId}`

  return (
    <div className={styles.themeTogglePosition}>
      <label id={labelId} className="visually-hidden">
        Select a theme
      </label>

      <div aria-labelledby={labelId} className={styles.wrapper}>
        {sortByLightness(options).map(theme => (
          <ThemeInput
            key={theme}
            theme={theme}
            checked={current === theme}
            groupName={groupId}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  )
}
