import { useCallback, useEffect, useRef, useState } from "preact/hooks"

import { HugeTimer, MilestoneTable, ThemeToggle } from "components"
import { useLocalStorage } from "hooks"

import { data, MilestoneNode, MilestoneLeaf, MilestoneGroup } from "./data"

export type NodeStatus = "finished" | "current" | "running" | "none"
export type NodeWithStatus = MilestoneNode<{
  status: NodeStatus
}>

const isRunning = ({ deadline, start = new Date(0) }: MilestoneLeaf) => {
  const now = Date.now()
  const isNotFinished = deadline.valueOf() - now > 0
  const startIsPassed = start.valueOf() - now <= 0
  return isNotFinished && startIsPassed
}

const isFinished = ({ deadline }: MilestoneLeaf) => {
  const now = Date.now()
  return deadline.valueOf() - now <= 0
}

const getStatus = (milestone: MilestoneLeaf, current: MilestoneLeaf | null) => {
  const running = isRunning(milestone)
  const isCurrent = !current && running
  const finished = isFinished(milestone)
  const status: NodeStatus = isCurrent
    ? "current"
    : running
    ? "running"
    : finished
    ? "finished"
    : "none"
  return {
    status,
    current: isCurrent ? milestone : current,
  }
}

const combineStatus = (...args: NodeStatus[]): NodeStatus => {
  if (args.includes("current")) return "current"
  if (args.includes("running")) return "running"
  if (args.includes("finished")) return "finished"
  return "none"
}

interface Result {
  current: MilestoneLeaf | null
  status: NodeStatus
  milestones: NodeWithStatus[]
}
const getNodesWithStatus = (nodes: MilestoneNode[]): Result => {
  const addGroupWithStatus = (
    result: Result,
    { id, label, items }: MilestoneGroup
  ): Result => {
    const inner = getNodesWithStatus(items)
    return {
      current: result.current ?? inner.current,
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
    const { current, status } = getStatus(leaf, result.current)
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
    { current: null, milestones: [], status: "none" }
  )
}

const useCurrentMilestone = (milestones: MilestoneNode[]) => {
  const [result, setResult] = useState(getNodesWithStatus(milestones))
  const timeout = useRef<NodeJS.Timeout>()

  const updateCurrent = useCallback(() => {
    setResult(getNodesWithStatus(milestones))
  }, [milestones])

  useEffect(() => {
    const { deadline } = result.current ?? {}
    if (deadline)
      timeout.current = setTimeout(
        updateCurrent,
        deadline.valueOf() - Date.now()
      )

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
