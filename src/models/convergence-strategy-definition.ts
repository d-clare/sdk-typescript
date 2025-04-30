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
import { DecompositionStrategyDefinition } from './decomposition-strategy-definition';
import { SynthesisStrategyDefinition } from './synthesis-strategy-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of the strategy used in a convergence-based agentic process
 */
export class ConvergenceStrategyDefinition extends Hydrator<ConvergenceStrategyDefinition> {
  constructor(model?: Partial<ConvergenceStrategyDefinition>) {
    super(model);
    if (model) {
      if (model.decomposition) this.decomposition = new DecompositionStrategyDefinition(model.decomposition);
      if (model.synthesis) this.synthesis = new SynthesisStrategyDefinition(model.synthesis);
    }
  }

  /**
   * Gets/sets the kernel function strategy, if any, used to decompose the initial prompt into specialized sub-prompts tailored to each contributing agent
   */
  @Type(() => DecompositionStrategyDefinition)
  decomposition?: DecompositionStrategyDefinition;

  /**
   * Gets/sets the kernel function strategy used to synthesize the individual agent responses into a single, unified output
   */
  @Type(() => SynthesisStrategyDefinition)
  synthesis?: SynthesisStrategyDefinition;
}
