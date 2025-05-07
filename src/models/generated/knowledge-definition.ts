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
import { EmbeddingModelDefinition } from './embedding-model-definition';
import { VectorStoreDefinition } from './vector-store-definition';
import { KnowledgeGraphDefinition } from './knowledge-graph-definition';
import { Type } from 'class-transformer';

/**
 * Represents the knowledge configuration used by the agent, including embeddings, vector retrieval, and knowledge graphs.
 */
export class KnowledgeDefinition extends Hydrator<KnowledgeDefinition> {
  constructor(model?: Partial<KnowledgeDefinition>) {
    super(model);
    if (model) {
      if (model.embedding) this.embedding = new EmbeddingModelDefinition(model.embedding);
      if (model.store) this.store = new VectorStoreDefinition(model.store);
      if (model.graph) this.graph = new KnowledgeGraphDefinition(model.graph);
    }
  }

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

  /**
   * Gets or sets the knowledge graph used for concept resolution and semantic traversal.
   */
  @Type(() => KnowledgeGraphDefinition)
  graph?: KnowledgeGraphDefinition;
}
