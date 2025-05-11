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
import { VectorCollectionDefinition } from './vector-collection-definition';
import { KnowledgeGraphDefinition } from './knowledge-graph-definition';
import { RecordTransform } from '../../transformers/record-transform';

/**
 * Represents the knowledge configuration used by the agent, including embeddings, vector retrieval, and knowledge graphs.
 */
export class KnowledgeDefinition extends Hydrator<KnowledgeDefinition> {
  constructor(model?: Partial<KnowledgeDefinition>) {
    super(model);
    if (model) {
      this.vectors = model.vectors
        ? Object.entries(model.vectors).reduce(
            (acc, [key, m]) => {
              acc[key] = new VectorCollectionDefinition(m);
              return acc;
            },
            {} as Record<string, VectorCollectionDefinition>
          )
        : {};
      this.graphs = model.graphs
        ? Object.entries(model.graphs).reduce(
            (acc, [key, m]) => {
              acc[key] = new KnowledgeGraphDefinition(m);
              return acc;
            },
            {} as Record<string, KnowledgeGraphDefinition>
          )
        : {};
    }
  }

  /**
   * Gets or sets the vector record collections available to the agent, each defined by its embedding model and backing vector store.
   */
  @RecordTransform(VectorCollectionDefinition)
  vectors?: Record<string, VectorCollectionDefinition>;

  /**
   * Gets or sets the knowledge graphs available to the agent, used for concept resolution and relationship traversal.
   */
  @RecordTransform(KnowledgeGraphDefinition)
  graphs?: Record<string, KnowledgeGraphDefinition>;
}
