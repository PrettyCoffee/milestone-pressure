type Child = JSX.Element | string | number | null | undefined

export type PropsWithChildren<T extends object = Record<string, never>> = T & {
  children?: Child | Child[]
}
