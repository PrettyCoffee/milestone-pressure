import { hydrate, prerender as ssr } from "preact-iso"

import { HugeTimer, MilestoneTable } from "components"

import milestones from "./milestones.json"

const sorted = milestones.sort((a, b) => {
  const dateA = new Date(a.deadline)
  const dateB = new Date(b.deadline)
  return dateA.valueOf() - dateB.valueOf()
})

const currentMilestone = sorted.find(milestone => {
  const date = new Date(milestone.deadline)
  const now = Date.now()
  return date.valueOf() - now > 0
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
