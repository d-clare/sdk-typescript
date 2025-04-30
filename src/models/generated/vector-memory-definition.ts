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
 * Represents the definition of a vector memory
 */
export class VectorMemoryDefinition extends Hydrator<VectorMemoryDefinition> {
  constructor(model?: Partial<VectorMemoryDefinition>) {
    super(model);
    if (model) {
      this.configuration = model.configuration ? model.configuration : {};
    }
  }

  /**
   * The name of the vector memory provider
   */
  provider: string;

  /**
   * A key/value mapping, if any, of the provider-specific properties used to configure the vector memory
   */
  configuration?: Record<string, any>;
}
