/*
 * Copyright © 2025-Present The DClare Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//!\ This file has been generated, any modification will be lost /!\\

import { Hydrator } from '../hydrator';

/**
 * Represents a duration of time.
 */
export class Duration extends Hydrator<Duration> {
  constructor(model?: Partial<Duration>) {
    super(model);
  }

  /**
   * The number of days.
   */
  days?: number;

  /**
   * The number of hours.
   */
  hours?: number;

  /**
   * The number of minutes.
   */
  minutes?: number;

  /**
   * The number of seconds.
   */
  seconds?: number;

  /**
   * The number of milliseconds.
   */
  milliseconds?: number;

  /**
   * Gets the total number of milliseconds for the duration.
   */
  get totalMilliseconds(): number {
    let ms = 0;
    if (this.days !== undefined) ms += this.days * 24 * 60 * 60 * 1000;
    if (this.hours !== undefined) ms += this.hours * 60 * 60 * 1000;
    if (this.minutes !== undefined) ms += this.minutes * 60 * 1000;
    if (this.seconds !== undefined) ms += this.seconds * 1000;
    if (this.milliseconds !== undefined) ms += this.milliseconds;
    return ms;
  }

  /**
   * Gets the total number of seconds for the duration.
   */
  get totalSeconds(): number {
    return this.totalMilliseconds / 1000;
  }

  /**
   * Gets the total number of minutes for the duration.
   */
  get totalMinutes(): number {
    return this.totalSeconds / 60;
  }

  /**
   * Gets the total number of hours for the duration.
   */
  get totalHours(): number {
    return this.totalMinutes / 60;
  }

  /**
   * Gets the total number of days for the duration.
   */
  get totalDays(): number {
    return this.totalHours / 24;
  }

  /**
   * A static instance representing a zero duration.
   */
  static readonly Zero = new Duration();

  /**
   * Creates a new Duration from the specified number of days.
   * @param days The number of days.
   */
  static fromDays(days: number): Duration {
    return new Duration({ days });
  }

  /**
   * Creates a new Duration from the specified number of hours.
   * @param hours The number of hours.
   */
  static fromHours(hours: number): Duration {
    return new Duration({ hours });
  }

  /**
   * Creates a new Duration from the specified number of minutes.
   * @param minutes The number of minutes.
   */
  static fromMinutes(minutes: number): Duration {
    return new Duration({ minutes });
  }

  /**
   * Creates a new Duration from the specified number of seconds.
   * @param seconds The number of seconds.
   */
  static fromSeconds(seconds: number): Duration {
    return new Duration({ seconds });
  }

  /**
   * Creates a new Duration from the specified number of milliseconds.
   * @param milliseconds The number of milliseconds.
   */
  static fromMilliseconds(milliseconds: number): Duration {
    return new Duration({ milliseconds });
  }
}
