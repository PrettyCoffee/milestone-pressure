/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process")
const { readFileSync, writeFileSync } = require("fs")

const replaceInFile = (filePath, oldContent, newContent) => {
  const original = readFileSync(filePath, { encoding: "utf-8" })
  const text = original.replaceAll(oldContent, newContent)

  writeFileSync(filePath, text, { encoding: "utf-8" })

  return () => writeFileSync(filePath, original, { encoding: "utf-8" })
}

const restoreConfig = replaceInFile(
  "wmr.config.ts",
  'publicPath: "/"',
  'publicPath: "/milestone-pressure/"'
)
const restoreStyles = replaceInFile(
  "public/style.css",
  '@import "/theme/',
  '@import "/milestone-pressure/theme/'
)
const restoreFonts = replaceInFile(
  "public/theme/fonts.css",
  "url(/theme/fonts/",
  "url(/milestone-pressure/theme/fonts/"
)
console.log("✅ Changed urls for github pages")

try {
  execSync("npm run build")
  console.log("✅ Transpiled code")

  execSync("npx gh-pages -d dist")
  console.log("✅ Deployed to github pages")
} catch (e) {
  console.error(e)
}

restoreStyles()
restoreFonts()
restoreConfig()
console.log("✅ Url changes reverted")
