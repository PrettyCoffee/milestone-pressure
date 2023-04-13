import { hydrate, prerender as ssr } from "preact-iso"

import { HugeTimer, MilestoneTable } from "components"

import milestones from "./milestones.json"

const parsedData = milestones.map(({ deadline, start, ...rest }) => ({
  ...rest,
  deadline: new Date(deadline),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  start: start ? new Date(start) : new Date(0),
}))

const sorted = parsedData.sort((a, b) => {
  const dateA = new Date(a.deadline)
  const dateB = new Date(b.deadline)
  return dateA.valueOf() - dateB.valueOf()
})

const currentMilestone = sorted.find(({ deadline, start }) => {
  const now = Date.now()
  const isNotFinished = deadline.valueOf() - now > 0
  const startIsPassed = start.valueOf() - now <= 0
  return isNotFinished && startIsPassed
})

const tableData = sorted.map(({ deadline, id, ...rest }) => ({
  ...rest,
  id,
  deadline: new Date(deadline),
  current: currentMilestone?.id === id,
}))

export const App = () => (
  <div className={"app"}>
    <HugeTimer
      label={currentMilestone?.label ?? ""}
      endDate={new Date(currentMilestone?.deadline ?? "")}
    />
    <div className="main">
      <MilestoneTable milestones={tableData} />
    </div>
  </div>
)

hydrate(<App />)

export async function prerender(data: object) {
  return await ssr(<App {...data} />)
}
