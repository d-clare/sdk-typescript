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
import { AgentDefinition } from './agent-definition';
import { PromptTemplateDefinition } from './prompt-template-definition';

/**
 * Represents the agent invocation configuration used by an ask task.
 */
export class AgentCallDefinition extends Hydrator<AgentCallDefinition> {
  constructor(model?: Partial<AgentCallDefinition>) {
    super(model);
    if (model) {
      if (model.agent) this.agent = model.agent;
      if (model.to) this.to = model.to;
    }
  }

  /**
   * Gets or sets the agent to invoke, either as an inline definition or by reference to a reusable agent definition.
   */
  agent: AgentDefinition | string;

  /**
   * Gets or sets the instruction to send to the agent. This can be either a plain string or a prompt template.
   */
  to: PromptTemplateDefinition | string;
}
