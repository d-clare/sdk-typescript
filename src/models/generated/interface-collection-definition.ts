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
import { AgentInterfaceDefinition } from './agent-interface-definition';
import { ProcessInterfaceDefinition } from './process-interface-definition';
import { RecordTransform } from '../../transformers/record-transform';

/**
 * Represents a collection of the interfaces exposed by the application
 */
export class InterfaceCollectionDefinition extends Hydrator<InterfaceCollectionDefinition> {
  constructor(model?: Partial<InterfaceCollectionDefinition>) {
    super(model);
    if (model) {
      this.agents = model.agents
        ? Object.entries(model.agents).reduce(
            (acc, [key, m]) => {
              acc[key] = new AgentInterfaceDefinition(m);
              return acc;
            },
            {} as Record<string, AgentInterfaceDefinition>
          )
        : {};
      this.processes = model.processes
        ? Object.entries(model.processes).reduce(
            (acc, [key, m]) => {
              acc[key] = new ProcessInterfaceDefinition(m);
              return acc;
            },
            {} as Record<string, ProcessInterfaceDefinition>
          )
        : {};
    }
  }

  /**
   * A name/definition mapping of the agent interfaces exposed by the application
   */
  @RecordTransform(AgentInterfaceDefinition)
  agents?: Record<string, AgentInterfaceDefinition>;

  /**
   * A name/definition mapping of the process interfaces exposed by the application
   */
  @RecordTransform(ProcessInterfaceDefinition)
  processes?: Record<string, ProcessInterfaceDefinition>;
}
