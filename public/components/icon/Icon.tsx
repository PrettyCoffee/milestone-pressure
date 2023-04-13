import { IconDefinition, IconBaseProps } from "./icons/_IconBase"

type IconsSize = "sm" | "md"

const iconSize: Record<IconsSize, { size: string; stroke: string }> = {
  sm: { size: "0.75rem", stroke: "0.25rem" },
  md: { size: "1rem", stroke: "0.125rem" },
}

export interface IconProps extends Pick<IconBaseProps, "color" | "fill"> {
  icon: IconDefinition
  size?: IconsSize | number
  className?: string
}

export const Icon = ({
  icon: Icon,
  size: sizeProp,
  ...delegated
}: IconProps) => {
  const { size, stroke } =
    typeof sizeProp === "string"
      ? iconSize[sizeProp]
      : { size: sizeProp, stroke: undefined }
  return <Icon size={size} strokeWidth={stroke} {...delegated} />
}
