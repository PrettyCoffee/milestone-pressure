export const joinClassNames = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join(" ")
