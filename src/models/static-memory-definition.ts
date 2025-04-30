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
import { MemoryEntryDefinition } from './memory-entry-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a static memory
 */
export class StaticMemoryDefinition extends Hydrator<StaticMemoryDefinition> {
  constructor(model?: Partial<StaticMemoryDefinition>) {
    super(model);
    if (model) {
      this.entries = model.entries ? model.entries.map((m: any) => new MemoryEntryDefinition(m)) : [];
    }
  }

  /**
   * Gets/sets a list of memory entries that will always be returned, typically pre-defined messages such as instructions or role definitions
   */
  @Type(() => MemoryEntryDefinition)
  entries: MemoryEntryDefinition[];
}
