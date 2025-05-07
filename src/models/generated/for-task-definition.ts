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
import { ForLoopDefinition } from './for-loop-definition';
import { Type } from 'class-transformer';
import { RecordTransform } from '../../transformers/record-transform';

/**
 * Represents the definition of a task that executes a set of subtasks iteratively for each element in a collection or range.
 */
export class ForTaskDefinition extends TaskDefinition {
  constructor(model?: Partial<ForTaskDefinition>) {
    super(model);
    if (model) {
      if (model.for) this.for = new ForLoopDefinition(model.for);
    }
  }

  /**
   * Gets or sets the loop control definition specifying how the iteration is performed.
   */
  @Type(() => ForLoopDefinition)
  for: ForLoopDefinition;

  /**
   * Gets or sets an optional runtime expression that acts as a conditional guard for the loop.
   */
  while?: string;

  /**
   * Gets or sets the tasks to execute during each iteration of the loop.
   */
  @RecordTransform(TaskDefinition)
  do: Record<string, TaskDefinition>;
}
