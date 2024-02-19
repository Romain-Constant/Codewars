/* export class Clock {
  hour: number;
  minute: number | undefined;

  constructor(hour: number, minute?: number) {
    this.hour = hour;
    this.minute = minute || 0;
  }

  public toString(): string {
    let formatedMinutes = this.minute
      ? this.formatMinutes(this.minute)
      : { hour: 0, minutes: 0 };

    let formatedHour =
      this.formatHour(this.hour) + formatedMinutes.hour < 0
        ? this.convertNegativeHour(
            this.formatHour(this.hour) + formatedMinutes.hour
          )
        : this.formatHour(this.hour + formatedMinutes.hour);

    let hourToString =
      formatedHour < 10
        ? `0${formatedHour.toString()}`
        : `${formatedHour.toString()}`;

    let minuteToString =
      formatedMinutes.minutes < 10
        ? `0${formatedMinutes.minutes.toString()}`
        : `${formatedMinutes.minutes.toString()}`;

    return `${hourToString}:${minuteToString}`;
  }

  public plus(minutes: number): Clock {
    let addedMinutes = this.minute ? (this.minute += minutes) : minutes;
    return new Clock(this.hour, addedMinutes);
  }

  public minus(minutes: number): Clock {
    let minusMinutes = this.minute ? this.minute - minutes : 0 - minutes;
    return new Clock(this.hour, minusMinutes);
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }

  private formatHour(hour: number) {
    if (hour < 0) {
      return this.convertNegativeHour(hour);
    } else if (hour < 24) {
      return hour;
    } else {
      return hour % 24;
    }
  }

  private convertNegativeHour(hour: number): number {
    if (hour >= -24) {
      return 24 - Math.abs(hour);
    } else {
      return this.convertNegativeHour(24 - Math.abs(hour));
    }
  }

  private formatMinutes(minutes: number) {
    const formatedMinutes = {};
    if (minutes < 0) {
      return this.convertNegativeMinutes(minutes);
    } else if (minutes < 60) {
      return { ...formatedMinutes, hour: 0, minutes: minutes };
    } else {
      return {
        ...formatedMinutes,
        hour: this.formatHour(Math.floor(minutes / 60)),
        minutes: minutes % 60,
      };
    }
  }

  private convertNegativeMinutes(minutes: number) {
    if (minutes > -60) {
      return { hour: -1, minutes: 60 - Math.abs(minutes) };
    } else {
      return { hour: Math.floor(minutes / 60), minutes: 60 + (minutes % 60) };
    }
  }
} */

const MINUTES_IN_DAY = 24 * 60;

export class Clock {
  private time: number = 0;

  constructor(hour = 0, minute = 0) {
    const time = (hour * 60 + minute) % MINUTES_IN_DAY;
    this.time = time < 0 ? time + MINUTES_IN_DAY : time;
  }

  public toString(): string {
    return `${String(Math.trunc(this.time / 60)).padStart(2, "0")}:${String(
      this.time % 60
    ).padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.time + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.time - minutes);
  }

  public equals(other: Clock): boolean {
    return other.time === this.time;
  }
}
