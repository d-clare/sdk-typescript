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
import { MemoryDefinition } from './memory-definition';
import { AgentMemoryInjectionStrategyDefinition } from './agent-memory-injection-strategy-definition';
import { AgentMemoryStoragePolicyDefinition } from './agent-memory-storage-policy-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of an agent's memory capability
 */
export class AgentMemoryCapabilityDefinition extends Hydrator<AgentMemoryCapabilityDefinition> {

  constructor(model?: Partial<AgentMemoryCapabilityDefinition>) {
    super(model);
    if (model) {
      if (model.source) this.source = new MemoryDefinition(model.source);
      if (model.inject) this.inject = new AgentMemoryInjectionStrategyDefinition(model.inject);
      if (model.store) this.store = new AgentMemoryStoragePolicyDefinition(model.store);
    }
  }

  /**
   * Gets/sets the source of the agent's memory
   */
  @Type(() => MemoryDefinition)
  source: MemoryDefinition;

  /**
   * Gets/sets an object, if any, that defines how memory is used to enrich the agent's prompt context
   */
  @Type(() => AgentMemoryInjectionStrategyDefinition)
  inject?: AgentMemoryInjectionStrategyDefinition;

  /**
   * Gets/sets an object, if any, that defines how the agent's output is persisted to memory
   */
  @Type(() => AgentMemoryStoragePolicyDefinition)
  store?: AgentMemoryStoragePolicyDefinition;
}