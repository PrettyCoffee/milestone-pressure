import { hydrate, prerender as ssr } from "preact-iso"

import { HugeTimer } from "components/huge-timer"

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

export const App = () => (
  <div className={"app"}>
    <HugeTimer
      label={currentMilestone?.label ?? ""}
      endDate={new Date(currentMilestone?.deadline ?? "")}
    />
  </div>
)

hydrate(<App />)

export async function prerender(data: object) {
  return await ssr(<App {...data} />)
}
