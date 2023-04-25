import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks"

import { HugeTimer, MilestoneTable, ThemeToggle } from "components"
import { Milestone } from "components/milestone-table/MilestoneTable"
import { useLocalStorage } from "hooks"

import { data } from "./data"

const getCurrentMilestone = (milestones: Milestone[]) =>
  milestones.find(({ deadline, start }) => {
    const now = Date.now()
    const isNotFinished = deadline.valueOf() - now > 0
    const startIsPassed = start.valueOf() - now <= 0
    return isNotFinished && startIsPassed
  })

const useCurrentMilestone = (milestones: Milestone[]) => {
  const [current, setCurrent] = useState(getCurrentMilestone(milestones))
  const timeout = useRef<NodeJS.Timeout>()

  const updateCurrent = useCallback(() => {
    setCurrent(getCurrentMilestone(milestones))
  }, [milestones])

  useEffect(() => {
    if (current?.deadline)
      timeout.current = setTimeout(
        updateCurrent,
        current.deadline.valueOf() - Date.now()
      )

    return () => clearTimeout(timeout.current)
  }, [current?.deadline, updateCurrent])

  const data = useMemo(
    () =>
      milestones.map(milestone =>
        milestone.id === current?.id
          ? { ...milestone, current: true }
          : { ...milestone, current: false }
      ),
    [current?.id, milestones]
  )

  return { current, milestones: data }
}

const themes = [
  "catppuccin",
  "catppuccin light",
  "everforest",
  "nord",
  "nord light",
]

export const Page = () => {
  const [theme, setTheme] = useLocalStorage("theme", themes[0])

  useEffect(() => {
    const current = theme.split(" ")
    themes
      .flatMap(name => name.split(" "))
      .forEach(name => {
        document.body.classList[current.includes(name) ? "add" : "remove"](name)
      })
  }, [theme])

  const tableData = useMemo(
    () =>
      data.map(({ deadline, id, ...rest }) => ({
        ...rest,
        id,
        deadline: new Date(deadline),
        current: false,
      })),
    []
  )

  const { current, milestones } = useCurrentMilestone(tableData)

  return (
    <div className="app">
      <HugeTimer
        label={current?.label ?? ""}
        endDate={current?.deadline ?? new Date("")}
      />
      <div className="main">
        <MilestoneTable milestones={milestones} />
      </div>
      <ThemeToggle current={theme} options={themes} onChange={setTheme} />
    </div>
  )
}
