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
import { EmbeddingModelProviderDefinition } from './embedding-model-provider-definition';
import { EmbeddingApiDefinition } from './embedding-api-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of an embedding model used to generate vector representations  of input text for use in semantic search, similarity comparison, or knowledge retrieval.
 */
export class EmbeddingModelDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<EmbeddingModelDefinition>) {
    super(model);
    if (model) {
      if (model.provider) this.provider = model.provider;
      if (model.api) this.api = new EmbeddingApiDefinition(model.api);
    }
  }

  /**
   * Gets or sets the definition of the embedding model provider.
   */
  provider: EmbeddingModelProviderDefinition | string;

  /**
   * Gets or sets the name of the embedding model to use.
   */
  model: string;

  /**
   * Gets or sets the definition of the API used to invoke the embedding model.
   */
  @Type(() => EmbeddingApiDefinition)
  api: EmbeddingApiDefinition;
}
