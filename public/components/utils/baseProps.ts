export type PropsWithChildren<T extends object = Record<string, never>> = T & {
  children: JSX.Element | JSX.Element[]
}
