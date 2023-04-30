import milestones from "../milestones.json"

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/consistent-type-definitions
type Empty = {}

type MilestoneLeafData<
  DateType extends Date | string,
  T extends object = Empty
> = T & {
  id: string
  label: string
  start?: DateType
  deadline: DateType
}

type MilestoneGroupData<
  DateType extends Date | string,
  T extends object = Empty
> = T & {
  id: string
  label: string
  items: DataNode<DateType, T>[]
}

type DataNode<DateType extends Date | string, T extends object = Empty> =
  | MilestoneLeafData<DateType, T>
  | MilestoneGroupData<DateType, T>

interface WithValue<T extends object> {
  node: T
  value: number
}

export type MilestoneLeaf<T extends object = Empty> = MilestoneLeafData<Date, T>
export type MilestoneGroup<T extends object = Empty> = MilestoneGroupData<
  Date,
  T
>
export type MilestoneNode<T extends object = Empty> = DataNode<Date, T>

const parseMilestone = (
  node: MilestoneLeafData<string>
): WithValue<MilestoneLeaf> => ({
  node: {
    ...node,
    deadline: new Date(node.deadline),
    start: node.start ? new Date(node.start) : new Date(0),
  },
  value: new Date(node.deadline).valueOf(),
})

const parseGroup = ({
  items,
  ...node
}: MilestoneGroupData<string>): WithValue<MilestoneGroup> => {
  const parsedItems = items
    .map(node => ("items" in node ? parseGroup(node) : parseMilestone(node)))
    .sort((a, b) => a.value - b.value)

  return {
    node: {
      ...node,
      items: parsedItems.map(({ node }) => node),
    },
    value: parsedItems[parsedItems.length - 1].value,
  }
}

const parseData = (data: DataNode<string>[]): MilestoneNode[] =>
  data
    .map(node => ("items" in node ? parseGroup(node) : parseMilestone(node)))
    .sort((a, b) => a.value - b.value)
    .map(({ node }) => node)

export const data = parseData(milestones)
