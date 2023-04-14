/* eslint-disable import/no-extraneous-dependencies */
import includePaths from "rollup-plugin-includepaths"
import { defineConfig } from "wmr"

// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig({
  publicPath: "/",
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
