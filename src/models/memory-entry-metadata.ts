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
 * Represents structured metadata describing a memory entry,
 */
export class MemoryEntryMetadata extends Hydrator<MemoryEntryMetadata> {

  constructor(model?: Partial<MemoryEntryMetadata>) {
    super(model);
    if (model) {
      this.tags = model.tags ? model.tags : [];
      this.properties = model.properties ? model.properties : {};
    }
  }

  /**
   * Gets/sets the primary topic or subject of the memory entry
   */
  topic?: string;

  /**
   * Gets/sets the category or type of content represented by this entry
   */
  category?: string;

  /**
   * Gets/sets a list of tags, if any, used to annotate or describe the memory entry
   */
  tags?: string[];

  /**
   * Gets/sets the locale or language tag associated with the entry, if applicable
   */
  locale?: string;

  /**
   * Gets/sets additional arbitrary key-value data, if any, associated to the memory entry
   */
  properties?: Record<string, any>;
}