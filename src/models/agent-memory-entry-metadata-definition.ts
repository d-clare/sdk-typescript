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
import { AgentMemoryMetadataResolutionStrategyDefinition } from './agent-memory-metadata-resolution-strategy-definition';
import { MemoryEntryMetadata } from './memory-entry-metadata';
import { Type } from 'class-transformer';

/**
 * Represents the definition of the metadata of the memory entries produced by an agent's output
 */
export class AgentMemoryEntryMetadataDefinition extends Hydrator<AgentMemoryEntryMetadataDefinition> {
  constructor(model?: Partial<AgentMemoryEntryMetadataDefinition>) {
    super(model);
    if (model) {
      if (model.resolution) this.resolution = new AgentMemoryMetadataResolutionStrategyDefinition(model.resolution);
      if (model.values) this.values = new MemoryEntryMetadata(model.values);
    }
  }

  /**
   * Gets/sets the definition of the strategy, if any, used to dynamically resolve the metadata of a memory entry
   */
  @Type(() => AgentMemoryMetadataResolutionStrategyDefinition)
  resolution?: AgentMemoryMetadataResolutionStrategyDefinition;

  /**
   * Gets/sets the static values to use when initializing a memory entry produced by the agent
   */
  @Type(() => MemoryEntryMetadata)
  values?: MemoryEntryMetadata;
}
