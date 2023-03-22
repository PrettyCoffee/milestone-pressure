import includePaths from "rollup-plugin-includepaths"
import { defineConfig } from "wmr"

// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig({
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  // visualize: true
  plugins: [
    includePaths({
      paths: ["public"],
      extensions: [".ts", ".tsx"],
    }),
  ],
})
