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

import { TaskDefinition } from './task-definition';
import { AgentCallDefinition } from './agent-call-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a task that invokes an agent.
 */
export class AskTaskDefinition extends TaskDefinition {
  constructor(model?: Partial<AskTaskDefinition>) {
    super(model);
    if (model) {
      if (model.ask) this.ask = new AgentCallDefinition(model.ask);
    }
  }

  /**
   * Gets or sets the configuration used to invoke the agent.
   */
  @Type(() => AgentCallDefinition)
  ask: AgentCallDefinition;
}
