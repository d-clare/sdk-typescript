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
import { AgentMemorySearchDefinition } from './agent-memory-search-definition';
import { AgentMemoryFormatOptions } from './agent-memory-format-options';
import { Type } from 'class-transformer';

/**
 * Represents the definition of the strategy used to enrich an agent's prompt context
 */
export class AgentMemoryInjectionStrategyDefinition extends Hydrator<AgentMemoryInjectionStrategyDefinition> {

  constructor(model?: Partial<AgentMemoryInjectionStrategyDefinition>) {
    super(model);
    if (model) {
      if (model.match) this.match = new AgentMemorySearchDefinition(model.match);
      if (model.format) this.format = new AgentMemoryFormatOptions(model.format);
    }
  }

  /**
   * Gets/sets the definition of the search and filtering strategy, if any, to match relevant memory entries
   */
  @Type(() => AgentMemorySearchDefinition)
  match?: AgentMemorySearchDefinition;

  /**
   * Gets/sets an object, if any, that defines how the matched memory entries should be formatted and injected
   */
  @Type(() => AgentMemoryFormatOptions)
  format?: AgentMemoryFormatOptions;
}