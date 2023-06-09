import styles from "./table.module.css"
import { PropsWithChildren } from "../utils/baseProps"
import { joinClassNames } from "../utils/joinClassNames"

type GenericProps = PropsWithChildren<{
  className?: string
  style?: JSX.CSSProperties
}>

interface CellProps {
  header?: boolean
  align?: "start" | "center" | "end"
}

const Cell = ({
  className,
  header = false,
  align = "start",
  style = {},
  ...props
}: GenericProps & CellProps) => (
  <div
    role={header ? "columnheader" : "cell"}
    className={joinClassNames(styles.cell, className)}
    style={{
      textAlign: align,
      ...style,
    }}
    {...props}
  />
)

const Row = ({ className, ...props }: GenericProps) => (
  <div
    role="row"
    className={joinClassNames(styles.row, className)}
    {...props}
  />
)

const Body = ({ className, ...props }: GenericProps) => (
  <div
    role="rowgroup"
    className={joinClassNames(styles.body, className)}
    {...props}
  />
)

const Header = ({ className, ...props }: GenericProps) => (
  <div
    role="rowgroup"
    className={joinClassNames(styles.header, className)}
    {...props}
  />
)

const TableRoot = ({ className, ...props }: GenericProps) => (
  <div
    role="table"
    className={joinClassNames(styles.table, className)}
    {...props}
  />
)

export default {
  Root: TableRoot,
  Header,
  Body,
  Row,
  Cell,
}
