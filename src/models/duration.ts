/*
 * Copyright � 2025-Present The DClare Authors
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
import { Exclude } from 'class-transformer';

/**
 * Represents a duration
 */
export class Duration extends Hydrator<Duration> {

  constructor(model?: Partial<Duration>) {
    super(model);
  }

  /**
   * Gets/sets the numbers of days, if any
   */
  days?: number;

  /**
   * Gets/sets the numbers of hours, if any
   */
  hours?: number;

  /**
   * Gets/sets the numbers of minutes, if any
   */
  minutes?: number;

  /**
   * Gets/sets the numbers of seconds, if any
   */
  seconds?: number;

  /**
   * Gets/sets the numbers of milliseconds, if any
   */
  milliseconds?: number;

  /**
   * Gets the the duration's total amount of days
   */
  @Exclude()
  totalDays?: number;

  /**
   * Gets the the duration's total amount of hours
   */
  @Exclude()
  totalHours?: number;

  /**
   * Gets the the duration's total amount of minutes
   */
  @Exclude()
  totalMinutes?: number;

  /**
   * Gets the the duration's total amount of seconds
   */
  @Exclude()
  totalSeconds?: number;

  /**
   * Gets the the duration's total amount of milliseconds
   */
  @Exclude()
  totalMilliseconds?: number;
}