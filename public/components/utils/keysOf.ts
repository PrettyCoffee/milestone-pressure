export const keysOf = <T extends object>(object: T) =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  Object.keys(object) as (keyof T)[]
