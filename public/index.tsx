import { hydrate, prerender as ssr } from "preact-iso"

import { Page } from "page/Page"

export const App = () => <Page />

hydrate(<App />)

export async function prerender(data: object) {
  return await ssr(<App {...data} />)
}
