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
import { FileMemoryDefinition } from './file-memory-definition';
import { KeyValueMemoryDefinition } from './key-value-memory-definition';
import { StaticMemoryDefinition } from './static-memory-definition';
import { VectorMemoryDefinition } from './vector-memory-definition';
import { Exclude, Expose, Type } from 'class-transformer';

/**
 * Represents the definition of a memory capability
 */
export class MemoryDefinition extends Hydrator<MemoryDefinition> {
  constructor(model?: Partial<MemoryDefinition>) {
    super(model);
    if (model) {
      if (model.file) this.file = new FileMemoryDefinition(model.file);
      if (model.keyValue) this.keyValue = new KeyValueMemoryDefinition(model.keyValue);
      if (model.static) this.static = new StaticMemoryDefinition(model.static);
      if (model.vector) this.vector = new VectorMemoryDefinition(model.vector);
    }
  }

  /**
   * Gets/sets the definition of a file-backed memory that loads entries from structured files in the local or remote file system
   */
  @Type(() => FileMemoryDefinition)
  file?: FileMemoryDefinition;

  /**
   * Gets/sets the definition of a key-value store memory that retrieves entries based on keys or tags
   */
  @Expose({ name: 'keyvalue' })
  @Type(() => KeyValueMemoryDefinition)
  keyValue?: KeyValueMemoryDefinition;

  /**
   * Gets/sets the definition of a static memory that returns predefined values without kernel lookup
   */
  @Type(() => StaticMemoryDefinition)
  static?: StaticMemoryDefinition;

  /**
   * Gets/sets the definition of a vector memory that retrieves entries using semantic similarity and vector search
   */
  @Type(() => VectorMemoryDefinition)
  vector?: VectorMemoryDefinition;

  /**
   * Gets the memory's type based on which definition is present
   */
  @Exclude()
  type?: string;
}
