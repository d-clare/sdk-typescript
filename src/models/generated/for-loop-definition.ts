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

import { Hydrator } from '../../hydrator';
import { InputDataModelDefinition } from './input-data-model-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a loop that iterates over a collection or range of values.
 */
export class ForLoopDefinition extends Hydrator<ForLoopDefinition> {
  constructor(model?: Partial<ForLoopDefinition>) {
    super(model);
    if (model) {
      if (model.input) this.input = new InputDataModelDefinition(model.input);
    }
  }

  /**
   * Gets or sets the name of the variable that will represent the current item in the iteration.
   */
  each?: string;

  /**
   * Gets or sets the runtime expression that evaluates to the collection or range to iterate over.
   */
  in: string;

  /**
   * Gets or sets the name of the variable used to track the index of each element during iteration.
   */
  at?: string;

  /**
   * Gets or sets the input definition, if any, to pass to the task(s) executed during each iteration.
   */
  @Type(() => InputDataModelDefinition)
  input?: InputDataModelDefinition;
}
