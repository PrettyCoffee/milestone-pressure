import { useCallback, useEffect, useRef, useState } from "preact/hooks"

import { HugeTimer, MilestoneTable, ThemeToggle } from "components"
import { useLocalStorage } from "hooks"

import { data, MilestoneNode, MilestoneLeaf, MilestoneGroup } from "./data"

export type NodeStatus = "finished" | "current" | "inProgress" | "none"
export type NodeWithStatus = MilestoneNode<{
  status: NodeStatus
}>

const isInProgress = (
  [start, end]: [Date | undefined, Date | undefined],
  fallback = false
) => {
  if (!start || !end) return fallback

  const now = Date.now()
  const didStart = start.valueOf() - now <= 0
  const isNotFinished = end.valueOf() - now > 0

  return isNotFinished && didStart && start.valueOf() !== 0
}

const isFinished = ({ deadline }: MilestoneLeaf) => {
  const now = Date.now()
  return deadline.valueOf() - now <= 0
}

const getStatus = (
  milestone: MilestoneLeaf,
  current: MilestoneLeaf | null
): NodeStatus => {
  const inProgress = isInProgress([milestone.start, milestone.deadline])
  const finished = isFinished(milestone)
  const isCurrent = !current && !finished

  return finished
    ? "finished"
    : isCurrent
    ? "current"
    : inProgress
    ? "inProgress"
    : "none"
}

const combineStatus = (...args: NodeStatus[]): NodeStatus => {
  if (args.includes("finished")) return "finished"
  if (args.includes("current")) return "current"
  if (args.includes("inProgress")) return "inProgress"
  return "none"
}

interface Result {
  current: MilestoneLeaf | null
  status: NodeStatus
  milestones: NodeWithStatus[]
}
const getNodesWithStatus = (
  nodes: MilestoneNode[],
  current: MilestoneLeaf | null = null
): Result => {
  const addGroupWithStatus = (
    result: Result,
    { id, label, items }: MilestoneGroup
  ): Result => {
    const inner = getNodesWithStatus(items, result.current)
    const current = result.current ?? inner.current

    return {
      current,
      status: inner.status,
      milestones: [
        ...result.milestones,
        {
          id,
          label,
          items: inner.milestones,
          status: inner.status,
        },
      ],
    }
  }

  const addLeafWithStatus = (result: Result, leaf: MilestoneLeaf): Result => {
    const status = getStatus(leaf, result.current)
    const current = result.current
      ? result.current
      : status === "current"
      ? leaf
      : null

    return {
      current,
      status: combineStatus(result.status, status),
      milestones: [...result.milestones, { ...leaf, status }],
    }
  }

  return nodes.reduce<Result>(
    (result, node) => {
      if ("items" in node) return addGroupWithStatus(result, node)
      return addLeafWithStatus(result, node)
    },
    { current, milestones: [], status: "none" }
  )
}

const useCurrentMilestone = (milestones: MilestoneNode[]) => {
  const [result, setResult] = useState(getNodesWithStatus(milestones))
  const timeout = useRef<NodeJS.Timeout>()
  const last = useRef<MilestoneLeaf | null>()

  const updateCurrent = useCallback(() => {
    setResult(getNodesWithStatus(milestones))
  }, [milestones])

  useEffect(() => {
    const { deadline } = result.current ?? {}
    if (deadline && last.current !== result.current) {
      last.current = result.current
      timeout.current = setTimeout(
        updateCurrent,
        deadline.valueOf() - Date.now()
      )
    }

    return () => clearTimeout(timeout.current)
  }, [result, updateCurrent])

  return { current: result.current, milestones: result.milestones }
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

  const { current, milestones } = useCurrentMilestone(data)

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
