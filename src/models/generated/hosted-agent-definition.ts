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
import { PromptTemplateDefinition } from './prompt-template-definition';
import { AgentSkillDefinition } from './agent-skill-definition';
import { MemoryDefinition } from './memory-definition';
import { KnowledgeDefinition } from './knowledge-definition';
import { LlmDefinition } from './llm-definition';
import { ToolsetDefinition } from './toolset-definition';
import { Type } from 'class-transformer';
import { RecordTransform } from '../../transformers/record-transform';

/**
 * Represents the definition of a hosted AI agent, including its instructions, skills, memory, knowledge, and runtime.
 */
export class HostedAgentDefinition extends Hydrator<HostedAgentDefinition> {
  constructor(model?: Partial<HostedAgentDefinition>) {
    super(model);
    if (model) {
      if (model.instructions) this.instructions = model.instructions;
      this.skills = model.skills
        ? Object.entries(model.skills).reduce(
            (acc, [key, m]) => {
              acc[key] = new AgentSkillDefinition(m);
              return acc;
            },
            {} as Record<string, AgentSkillDefinition>
          )
        : {};
      if (model.memory) this.memory = new MemoryDefinition(model.memory);
      if (model.knowledge) this.knowledge = new KnowledgeDefinition(model.knowledge);
      if (model.llm) this.llm = new LlmDefinition(model.llm);
      this.toolsets = model.toolsets
        ? Object.entries(model.toolsets).reduce(
            (acc, [key, m]) => {
              acc[key] = new ToolsetDefinition(m);
              return acc;
            },
            {} as Record<string, ToolsetDefinition>
          )
        : {};
    }
  }

  /**
   * Gets or sets an optional human-readable description of the agent's purpose or role.
   */
  description?: string;

  /**
   * Gets or sets the union value representing either a prompt template or a raw instruction string.
   */
  instructions: PromptTemplateDefinition | string;

  /**
   * Gets or sets the dictionary of named skills the agent supports.
   */
  @RecordTransform(AgentSkillDefinition)
  skills?: Record<string, AgentSkillDefinition>;

  /**
   * Gets or sets the memory definition used by the agent, if any.
   */
  @Type(() => MemoryDefinition)
  memory?: MemoryDefinition;

  /**
   * Gets or sets the knowledge configuration used by the agent, if any.
   */
  @Type(() => KnowledgeDefinition)
  knowledge?: KnowledgeDefinition;

  /**
   * Gets or sets the definition of the LLM used by the agent.
   */
  @Type(() => LlmDefinition)
  llm: LlmDefinition;

  /**
   * Gets or sets the toolsets the agent is capable of using.
   */
  @RecordTransform(ToolsetDefinition)
  toolsets?: Record<string, ToolsetDefinition>;
}
