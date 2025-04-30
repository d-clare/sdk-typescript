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

/**
 * Represents the definition of the search an agent should perform on its memory to enrich its prompt context
 */
export class AgentMemorySearchDefinition extends Hydrator<AgentMemorySearchDefinition> {
  constructor(model?: Partial<AgentMemorySearchDefinition>) {
    super(model);
    if (model) {
      this.keys = model.keys ? model.keys : [];
      this.tags = model.tags ? model.tags : [];
      this.filters = model.filters ? model.filters : {};
    }
  }

  /**
   * Gets/sets the maximum number, if any, of memory entries to match
   */
  max?: number;

  /**
   * Gets/sets the minimum similarity score required for a vector match (0.0 to 1.0)<para></para>  Only applies to vector memory sources.
   */
  similarity?: number;

  /**
   * Gets/sets the keys to retrieve in key-value memory stores, or to pattern-match for file-based memory sources
   */
  keys?: string[];

  /**
   * Gets/sets the file path or glob pattern used to restrict the search in file-based memory sources
   */
  path?: string;

  /**
   * Gets/sets the list of tags used to filter memory entries
   */
  tags?: string[];

  /**
   * Gets/sets an optional topic used to filter or group memory entries semantically
   */
  topic?: string;

  /**
   * Gets/sets optional metadata filters where keys must match specified values
   */
  filters?: Record<string, string>;
}
