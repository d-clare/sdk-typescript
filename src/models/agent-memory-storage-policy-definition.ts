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
import { AgentMemorySynthetizationStrategyDefinition } from './agent-memory-synthetization-strategy-definition';
import { AgentMemoryEntryMetadataDefinition } from './agent-memory-entry-metadata-definition';
import { Type } from 'class-transformer';

/**
 * Represents an object that defines how an agent's output is persisted to memory
 */
export class AgentMemoryStoragePolicyDefinition extends Hydrator<AgentMemoryStoragePolicyDefinition> {

  constructor(model?: Partial<AgentMemoryStoragePolicyDefinition>) {
    super(model);
    if (model) {
      if (model.synthetization) this.synthetization = new AgentMemorySynthetizationStrategyDefinition(model.synthetization);
      if (model.metadata) this.metadata = new AgentMemoryEntryMetadataDefinition(model.metadata);
    }
  }

  /**
   * Gets/sets the optional template to apply per memory entry (e.g., "- {{ content }}").
   */
  template?: string;

  /**
   * Gets/sets whether to include the prompt along with the agent's output.
   */
  includePrompt?: boolean;

  /**
   * Gets/sets the definition of the strategy, if any, to use to synthesize the agent's output before storing it into memory
   */
  @Type(() => AgentMemorySynthetizationStrategyDefinition)
  synthetization?: AgentMemorySynthetizationStrategyDefinition;

  /**
   * Gets/sets the definition of the strategy, if any, used to synthesize the agent's output before storing it into memory
   */
  @Type(() => AgentMemoryEntryMetadataDefinition)
  metadata?: AgentMemoryEntryMetadataDefinition;
}