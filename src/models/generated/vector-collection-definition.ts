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
import { EmbeddingModelDefinition } from './embedding-model-definition';
import { VectorStoreDefinition } from './vector-store-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a vector collection, including its unique identifier, the embedding model used to generate vectors, and the backing vector store used to persist and retrieve them.
 */
export class VectorCollectionDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<VectorCollectionDefinition>) {
    super(model);
    if (model) {
      if (model.embedding) this.embedding = new EmbeddingModelDefinition(model.embedding);
      if (model.store) this.store = new VectorStoreDefinition(model.store);
    }
  }

  /**
   * Gets or sets the unique identifier of the collection within the vector store. This value determines the name of the collection as it is stored and queried in the backing vector database.
   */
  id: string;

  /**
   * Gets or sets the embedding model used to vectorize textual input.
   */
  @Type(() => EmbeddingModelDefinition)
  embedding: EmbeddingModelDefinition;

  /**
   * Gets or sets the vector store used to persist and retrieve embedded representations.
   */
  @Type(() => VectorStoreDefinition)
  store: VectorStoreDefinition;
}
