const MILLISECONDS_PER_SECOND = 1000
const SECONDS_PER_MINUTE = 60
const MINUTES_PER_HOUR = 60
const HOURS_PER_DAY = 24

export type DateSegmentName =
  | "days"
  | "hours"
  | "minutes"
  | "seconds"
  | "milliseconds"
export type DateSegments = Record<DateSegmentName, number>

export const getDateSegments = (diffInMilliseconds: number): DateSegments => {
  const diffInSeconds = diffInMilliseconds / MILLISECONDS_PER_SECOND
  const diffInMinutes = diffInSeconds / SECONDS_PER_MINUTE
  const diffInHours = diffInMinutes / MINUTES_PER_HOUR

  return {
    days: Math.floor(diffInHours / HOURS_PER_DAY),
    hours: Math.floor(diffInHours % HOURS_PER_DAY),
    minutes: Math.floor(diffInMinutes % SECONDS_PER_MINUTE),
    seconds: Math.floor(diffInSeconds % SECONDS_PER_MINUTE),
    milliseconds: Math.floor(diffInMilliseconds % MILLISECONDS_PER_SECOND),
  }
}
