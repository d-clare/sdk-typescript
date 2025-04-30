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
import { SelectionStrategyDefinition } from './selection-strategy-definition';
import { TerminationStrategyDefinition } from './termination-strategy-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of the strategy used in a collaboration-based agentic process
 */
export class CollaborationStrategyDefinition extends Hydrator<CollaborationStrategyDefinition> {
  constructor(model?: Partial<CollaborationStrategyDefinition>) {
    super(model);
    if (model) {
      if (model.selection) this.selection = new SelectionStrategyDefinition(model.selection);
      if (model.termination) this.termination = new TerminationStrategyDefinition(model.termination);
    }
  }

  /**
   * Gets/sets the kernel function strategy used to select which agents participate and in what order or combination
   */
  @Type(() => SelectionStrategyDefinition)
  selection: SelectionStrategyDefinition;

  /**
   * Gets/sets the kernel function strategy used to determine when the collaborative process should conclude
   */
  @Type(() => TerminationStrategyDefinition)
  termination: TerminationStrategyDefinition;
}
