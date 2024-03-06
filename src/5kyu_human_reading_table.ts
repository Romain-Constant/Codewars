export function humanReadable(seconds: number): string {
  let returnHour = seconds / 3600;
  let returnMinutes = (seconds % 3600) / 60;
  let returnSeconds = (seconds % 3600) % 60;

  function convertTimeToString(time: number) {
    return Math.floor(time).toString().padStart(2, "0");
  }

  return `${convertTimeToString(returnHour)}:${convertTimeToString(
    returnMinutes
  )}:${convertTimeToString(returnSeconds)}`;
}
