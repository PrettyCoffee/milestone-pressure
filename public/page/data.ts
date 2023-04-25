import milestones from "../milestones.json"

interface MilestoneData {
  id: string
  label: string
  start?: string
  deadline?: string
}

type Data = MilestoneData[]

const getData = (): Data => milestones

const parsedData = getData().map(({ deadline, start, ...rest }) => ({
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

export const data = sorted
