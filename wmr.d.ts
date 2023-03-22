declare module "rollup-plugin-includepaths" {
  import "rollup-plugin-includepaths"
  import { Plugin } from "wmr"

  interface IncludeConfig {
    include?: Record<string, string>
    paths?: string[]
    external?: string[]
    extensions?: string[]
  }

  export default function includePaths(config: IncludeConfig): Plugin
}
