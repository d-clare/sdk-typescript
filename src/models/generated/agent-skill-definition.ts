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

/**
 * Represents the definition of an agent's skill, including an optional human-readable description  that can be used to inform selection or routing logic.
 */
export class AgentSkillDefinition extends Hydrator<AgentSkillDefinition> {
  constructor(model?: Partial<AgentSkillDefinition>) {
    super(model);
  }

  /**
   * Gets or sets a short, human-readable description of the agent's skill or capability.  This information may be used to evaluate and select the most appropriate agent for a given task.
   */
  description?: string;
}
