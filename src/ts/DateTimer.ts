import { DateSegmentName } from "./getDateSegments"

type DateTimerProps = Pick<
  DateTimer,
  "days" | "hours" | "minutes" | "seconds" | "milliseconds"
>

const renderHtml = (props: DateTimerProps) => `
  <div class="timer">
    <span class="segment days">${props.days}</span>
    <span class="delimiter">d</span>
    <span class="segment hours">${props.hours}</span>
    <span class="delimiter blink">:</span>
    <span class="segment minutes">${props.minutes}</span>
    <span class="delimiter blink">:</span>
    <span class="segment seconds">${props.seconds}</span>
    <span class="delimiter blink">.</span>
    <span class="segment milliseconds">${props.milliseconds}</span>
  </div>
`

const styles = `
  @keyframes blink-animation {
    50% {
      opacity: 1;
    }
    65% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .timer {
    font-weight: 600;
    font-size: 5rem;
  }

  .blink {
    animation: blink-animation 2s infinite;
  }

  .delimiter {
    color: var(--overlay0);
  }
`

const stringPad: Record<DateSegmentName, number> = {
  days: 1,
  hours: 2,
  minutes: 2,
  seconds: 2,
  milliseconds: 3,
}

const formatTimeSegment = (value: number, key: DateSegmentName) =>
  String(Math.max(0, value)).padStart(stringPad[key], "0")

export class DateTimer extends HTMLElement {
  public days: number
  public hours: number
  public minutes: number
  public seconds: number
  public milliseconds: number

  constructor() {
    super()
    this.days = 0
    this.hours = 0
    this.minutes = 0
    this.seconds = 0
    this.milliseconds = 0
  }

  /** Initial render */
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" })
    shadow.innerHTML = `
    ${renderHtml(this)}
    <style>${styles}</syle>
    `
  }

  /** Reactive attributes */
  static get observedAttributes(): (keyof DateTimerProps)[] {
    return ["days", "hours", "minutes", "seconds", "milliseconds"]
  }

  /** React to attribute changes */
  attributeChangedCallback<Key extends keyof DateTimerProps>(
    property: Key,
    oldValue: (typeof this)[Key],
    newValue: (typeof this)[Key]
  ) {
    const number = Number(newValue)
    const segment = this.getSegmentElement(property)

    if (!segment || Number.isNaN(number) || oldValue === number) return

    this[property] = number
    segment.innerHTML = formatTimeSegment(number, property)
  }

  private getSegmentElement(key: keyof DateTimerProps) {
    const timer = this.shadowRoot?.firstElementChild
    if (!(timer instanceof HTMLElement)) return null
    return timer.getElementsByClassName(key)[0]
  }
}

customElements.define("date-timer", DateTimer)
