/* eslint-disable check-file/filename-naming-convention */
import { FunctionComponent } from "preact"

import { PropsWithChildren } from "components/utils/baseProps"

export interface IconBaseProps {
  color?: string
  size?: number | string
  className?: string
  fill?: boolean
  strokeWidth?: number | string
}

export type IconDefinition = FunctionComponent<IconBaseProps>

const getStyle = (size: number | string) => ({
  height: size,
  minHeight: size,
  width: size,
  minWidth: size,
})

export const IconBase = ({
  color = "currentColor",
  size = 24,
  children,
  fill,
  strokeWidth,
  ...rest
}: PropsWithChildren<IconBaseProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor" : "none"}
    stroke={color}
    stroke-width={strokeWidth ?? "0.25rem"}
    stroke-linecap="round"
    stroke-linejoin="round"
    style={getStyle(size)}
    {...rest}
  >
    {children}
  </svg>
)
