import { hydrate, prerender as ssr } from "preact-iso"

import { Timer } from "components"

export const App = () => (
  <div class={"app"}>
    <Timer
      label="Zeit bis zur Abgabe"
      endDate={new Date("2023-03-23T00:00:00")}
    />
  </div>
)

hydrate(<App />)

export async function prerender(data: object) {
  return await ssr(<App {...data} />)
}
