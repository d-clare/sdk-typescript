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
import { KernelFunctionDefinition } from './kernel-function-definition';
import { KernelDefinition } from './kernel-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a kernel function–based strategy
 */
export class KernelFunctionStrategyDefinition extends Hydrator<KernelFunctionStrategyDefinition> {
  constructor(model?: Partial<KernelFunctionStrategyDefinition>) {
    super(model);
    if (model) {
      if (model.function) this.function = new KernelFunctionDefinition(model.function);
      if (model.kernel) this.kernel = new KernelDefinition(model.kernel);
    }
  }

  /**
   * Gets/sets the kernel function to use
   */
  @Type(() => KernelFunctionDefinition)
  function: KernelFunctionDefinition;

  /**
   * Gets/sets the kernel used to invoke the function
   */
  @Type(() => KernelDefinition)
  kernel: KernelDefinition;
}
