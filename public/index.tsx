import { hydrate, prerender as ssr } from "preact-iso"

import { Page } from "page/Page"

import milestones from "./milestones.json"

const parsedData = milestones.map(({ deadline, start, ...rest }) => ({
  ...rest,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  deadline: deadline ? new Date(deadline) : new Date(0),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  start: start ? new Date(start) : new Date(0),
}))

const sorted = parsedData.sort((a, b) => {
  const dateA = new Date(a.deadline)
  const dateB = new Date(b.deadline)
  return dateA.valueOf() - dateB.valueOf()
})

export const App = () => <Page milestones={sorted} />

hydrate(<App />)

export async function prerender(data: object) {
  return await ssr(<App {...data} />)
}
