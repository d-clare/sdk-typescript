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

import { ReferenceableComponentDefinition } from './referenceable-component-definition';
import { VectorStoreProviderDefinition } from './vector-store-provider-definition';
import { Type } from 'class-transformer';

/**
 * Represents the configuration of a vector store used to persist and query vector embeddings.
 */
export class VectorStoreDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<VectorStoreDefinition>) {
    super(model);
    if (model) {
      if (model.provider) this.provider = new VectorStoreProviderDefinition(model.provider);
    }
  }

  /**
   * Gets or sets the definition of the vector store provider.
   */
  @Type(() => VectorStoreProviderDefinition)
  provider: VectorStoreProviderDefinition;
}
