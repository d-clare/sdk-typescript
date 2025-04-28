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


import { Hydrator } from '../hydrator';
import { AgentSkillDefinition } from './agent-skill-definition';
import { KernelDefinition } from './kernel-definition';
import { AgentMemoryCapabilityDefinition } from './agent-memory-capability-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of an hosted agent
 */
export class HostedAgentDefinition extends Hydrator<HostedAgentDefinition> {

  constructor(model?: Partial<HostedAgentDefinition>) {
    super(model);
    if (model) {
      this.skills = model.skills ? model.skills.map((m: any) => new AgentSkillDefinition(m)) : [];
      if (model.kernel) this.kernel = new KernelDefinition(model.kernel);
      if (model.memory) this.memory = new AgentMemoryCapabilityDefinition(model.memory);
    }
  }

  /**
   * Gets/sets a reference to the agent definition to extend, if any
   */
  extends?: string;

  /**
   * Gets/sets a short human-readable description of the agent's role or purpose, which is used for documentation, UI display, and prompt composition
   */
  description?: string;

  /**
   * Gets/sets the specific instructions that guide the agent's behavior
   */
  instructions?: string;

  /**
   * Gets/sets a list containing the agent's skills, if any
   */
  @Type(() => AgentSkillDefinition)
  skills?: AgentSkillDefinition[];

  /**
   * Gets/sets the definition of the kernel that powers the agent's capabilities
   */
  @Type(() => KernelDefinition)
  kernel: KernelDefinition;

  /**
   * Gets/sets the definition of the agent's memory, if any
   */
  @Type(() => AgentMemoryCapabilityDefinition)
  memory?: AgentMemoryCapabilityDefinition;
}