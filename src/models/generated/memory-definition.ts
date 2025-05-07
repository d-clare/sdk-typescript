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

import { ReferenceableComponentDefinition } from './referenceable-component-definition';
import { MemoryProviderDefinition } from './memory-provider-definition';
import { FunctionDefinition } from './function-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a conversation memory
 */
export class MemoryDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<MemoryDefinition>) {
    super(model);
    if (model) {
      if (model.provider) this.provider = new MemoryProviderDefinition(model.provider);
      if (model.summarizer) this.summarizer = new FunctionDefinition(model.summarizer);
    }
  }

  /**
   * Gets or sets the definition of the memory provider to use.
   */
  @Type(() => MemoryProviderDefinition)
  provider: MemoryProviderDefinition;

  /**
   * Gets or sets the retention strategy to use (e.g., 'window', 'full', 'summary').
   */
  strategy: string;

  /**
   * Gets or sets the maximum number of exchanges to retain in memory when using the 'window' strategy.
   */
  windowSize?: number;

  /**
   * Gets or sets the function used to summarize memory when using the 'summary' strategy.
   */
  @Type(() => FunctionDefinition)
  summarizer?: FunctionDefinition;
}
