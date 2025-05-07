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

import { TaskDefinition } from './task-definition';
import { RecordTransform } from '../../transformers/record-transform';

/**
 * Represents a composite task that executes a set of named tasks either sequentially or in parallel.
 */
export class DoTaskDefinition extends TaskDefinition {
  constructor(model?: Partial<DoTaskDefinition>) {
    super(model);
    if (model) {
      this.sequentially = model.sequentially
        ? Object.entries(model.sequentially).reduce(
            (acc, [key, m]) => {
              acc[key] = new TaskDefinition(m);
              return acc;
            },
            {} as Record<string, TaskDefinition>
          )
        : {};
      this.simultaneously = model.simultaneously
        ? Object.entries(model.simultaneously).reduce(
            (acc, [key, m]) => {
              acc[key] = new TaskDefinition(m);
              return acc;
            },
            {} as Record<string, TaskDefinition>
          )
        : {};
    }
  }

  /**
   * Gets or sets the tasks to execute in sequence. Must not be used together with 'simultaneously'.
   */
  @RecordTransform(TaskDefinition)
  sequentially?: Record<string, TaskDefinition>;

  /**
   * Gets or sets the tasks to execute in parallel. Must not be used together with 'sequentially'.
   */
  @RecordTransform(TaskDefinition)
  simultaneously?: Record<string, TaskDefinition>;
}
