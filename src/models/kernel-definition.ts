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
import { ReasoningCapabilityDefinition } from './reasoning-capability-definition';
import { EmbeddingCapabilityDefinition } from './embedding-capability-definition';
import { ToolsetDefinition } from './toolset-definition';
import { Type } from 'class-transformer';

/**
 * Represents the configuration of a kernel system capable of performing AI inference operations, such as language model completions, chat interactions, or vector embeddings
 */
export class KernelDefinition extends ReferenceableComponentDefinition {

  constructor(model?: Partial<KernelDefinition>) {
    super(model);
    if (model) {
      if (model.reasoning) this.reasoning = new ReasoningCapabilityDefinition(model.reasoning);
      if (model.embedding) this.embedding = new EmbeddingCapabilityDefinition(model.embedding);
      this.toolsets = model.toolsets ? Object.entries(model.toolsets).reduce((acc, [key, m]) => { acc[key] = new ToolsetDefinition(m); return acc; }, {} as Record<string, ToolsetDefinition>) : {};
    }
  }

  /**
   * Gets/sets a reference to the kernel definition to extend, if any
   */
  extends?: string;

  /**
   * Gets/sets the configuration of the kernel's reasoning capability, if any
   */
  @Type(() => ReasoningCapabilityDefinition)
  reasoning?: ReasoningCapabilityDefinition;

  /**
   * Gets/sets the configuration of the kernel's embedding capability, if any
   */
  @Type(() => EmbeddingCapabilityDefinition)
  embedding?: EmbeddingCapabilityDefinition;

  /**
   * Gets/sets a key/definition mapping of the toolsets available to the kernel
   */
  @Type(() => ToolsetDefinition)
  toolsets?: Record<string, ToolsetDefinition>;
}