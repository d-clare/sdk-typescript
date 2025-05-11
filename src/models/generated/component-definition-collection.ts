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
import { AuthenticationPolicyDefinition } from './authentication-policy-definition';
import { ToolsetDefinition } from './toolset-definition';
import { PromptTemplateDefinition } from './prompt-template-definition';
import { FunctionDefinition } from './function-definition';
import { MemoryDefinition } from './memory-definition';
import { EmbeddingModelDefinition } from './embedding-model-definition';
import { VectorStoreDefinition } from './vector-store-definition';
import { VectorCollectionDefinition } from './vector-collection-definition';
import { KnowledgeGraphDefinition } from './knowledge-graph-definition';
import { LlmDefinition } from './llm-definition';
import { AgentDefinition } from './agent-definition';
import { RecordTransform } from '../../transformers/record-transform';

/**
 * Represents a collection of reusable components that can be referenced within a workflow.
 */
export class ComponentDefinitionCollection extends Hydrator<ComponentDefinitionCollection> {
  constructor(model?: Partial<ComponentDefinitionCollection>) {
    super(model);
    if (model) {
      this.secrets = model.secrets ? model.secrets : [];
      this.authentications = model.authentications
        ? Object.entries(model.authentications).reduce(
            (acc, [key, m]) => {
              acc[key] = new AuthenticationPolicyDefinition(m);
              return acc;
            },
            {} as Record<string, AuthenticationPolicyDefinition>
          )
        : {};
      this.toolsets = model.toolsets
        ? Object.entries(model.toolsets).reduce(
            (acc, [key, m]) => {
              acc[key] = new ToolsetDefinition(m);
              return acc;
            },
            {} as Record<string, ToolsetDefinition>
          )
        : {};
      this.prompts = model.prompts
        ? Object.entries(model.prompts).reduce(
            (acc, [key, m]) => {
              acc[key] = new PromptTemplateDefinition(m);
              return acc;
            },
            {} as Record<string, PromptTemplateDefinition>
          )
        : {};
      this.functions = model.functions
        ? Object.entries(model.functions).reduce(
            (acc, [key, m]) => {
              acc[key] = new FunctionDefinition(m);
              return acc;
            },
            {} as Record<string, FunctionDefinition>
          )
        : {};
      this.memories = model.memories
        ? Object.entries(model.memories).reduce(
            (acc, [key, m]) => {
              acc[key] = new MemoryDefinition(m);
              return acc;
            },
            {} as Record<string, MemoryDefinition>
          )
        : {};
      this.embeddingModels = model.embeddingModels
        ? Object.entries(model.embeddingModels).reduce(
            (acc, [key, m]) => {
              acc[key] = new EmbeddingModelDefinition(m);
              return acc;
            },
            {} as Record<string, EmbeddingModelDefinition>
          )
        : {};
      this.vectorStores = model.vectorStores
        ? Object.entries(model.vectorStores).reduce(
            (acc, [key, m]) => {
              acc[key] = new VectorStoreDefinition(m);
              return acc;
            },
            {} as Record<string, VectorStoreDefinition>
          )
        : {};
      this.vectorCollections = model.vectorCollections
        ? Object.entries(model.vectorCollections).reduce(
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
      this.llms = model.llms
        ? Object.entries(model.llms).reduce(
            (acc, [key, m]) => {
              acc[key] = new LlmDefinition(m);
              return acc;
            },
            {} as Record<string, LlmDefinition>
          )
        : {};
      this.agents = model.agents
        ? Object.entries(model.agents).reduce(
            (acc, [key, m]) => {
              acc[key] = new AgentDefinition(m);
              return acc;
            },
            {} as Record<string, AgentDefinition>
          )
        : {};
    }
  }

  /**
   * Gets or sets a list containing the secrets, if any, used to securely configure components.
   */
  secrets?: string[];

  /**
   * Gets or sets a mapping of reusable authentication policies, keyed by name.
   */
  @RecordTransform(AuthenticationPolicyDefinition)
  authentications?: Record<string, AuthenticationPolicyDefinition>;

  /**
   * Gets or sets a mapping of reusable toolsets, keyed by name.
   */
  @RecordTransform(ToolsetDefinition)
  toolsets?: Record<string, ToolsetDefinition>;

  /**
   * Gets or sets a mapping of reusable prompt template definitions, keyed by name.
   */
  @RecordTransform(PromptTemplateDefinition)
  prompts?: Record<string, PromptTemplateDefinition>;

  /**
   * Gets or sets a mapping of reusable functions, keyed by name.
   */
  @RecordTransform(FunctionDefinition)
  functions?: Record<string, FunctionDefinition>;

  /**
   * Gets or sets a mapping of reusable memory definitions, keyed by name.
   */
  @RecordTransform(MemoryDefinition)
  memories?: Record<string, MemoryDefinition>;

  /**
   * Gets or sets a mapping of reusable embedding model definitions, keyed by name.
   */
  @RecordTransform(EmbeddingModelDefinition)
  embeddingModels?: Record<string, EmbeddingModelDefinition>;

  /**
   * Gets or sets a mapping of reusable vector store definitions, keyed by name.
   */
  @RecordTransform(VectorStoreDefinition)
  vectorStores?: Record<string, VectorStoreDefinition>;

  /**
   * Gets or sets a mapping of reusable vector collection definitions, keyed by name.
   */
  @RecordTransform(VectorCollectionDefinition)
  vectorCollections?: Record<string, VectorCollectionDefinition>;

  /**
   * Gets or sets a mapping of reusable knowledge graph definitions, keyed by name.
   */
  @RecordTransform(KnowledgeGraphDefinition)
  graphs?: Record<string, KnowledgeGraphDefinition>;

  /**
   * Gets or sets a mapping of reusable Large Language Model (LLM) definitions, keyed by name.
   */
  @RecordTransform(LlmDefinition)
  llms?: Record<string, LlmDefinition>;

  /**
   * Gets or sets a mapping of reusable agent definitions, keyed by name.
   */
  @RecordTransform(AgentDefinition)
  agents?: Record<string, AgentDefinition>;
}
