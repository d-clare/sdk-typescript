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
import { MemoryEntryMetadata } from './memory-entry-metadata';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a memory entry
 */
export class MemoryEntryDefinition extends Hydrator<MemoryEntryDefinition> {

  constructor(model?: Partial<MemoryEntryDefinition>) {
    super(model);
    if (model) {
      if (model.metadata) this.metadata = new MemoryEntryMetadata(model.metadata);
    }
  }

  /**
   * Gets/sets the actual content or message of the memory entry
   */
  content: string;

  /**
   * Gets/sets the metadata, if any, used to describe the memory entry
   */
  @Type(() => MemoryEntryMetadata)
  metadata?: MemoryEntryMetadata;
}