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

import { Hydrator } from '../../hydrator';

/**
 * Represents the definition of a memory provider
 */
export class MemoryProviderDefinition extends Hydrator<MemoryProviderDefinition> {
  constructor(model?: Partial<MemoryProviderDefinition>) {
    super(model);
    if (model) {
      this.configuration = model.configuration ? model.configuration : {};
    }
  }

  /**
   * Gets or sets the name of the memory provider to use
   */
  name: string;

  /**
   * Gets or sets the key/value mapping of configuration values, if any, required by the provider
   */
  configuration?: Record<string, any>;
}
