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
import { AgentDefinition } from './agent-definition';
import { CollaborationStrategyDefinition } from './collaboration-strategy-definition';
import { Type } from 'class-transformer';
import { RecordTransform } from '../transformers/record-transform';

/**
 * Represents an agentic process in which multiple agents perform their tasks sequentially with configurable selection and termination strategies
 */
export class CollaborationAgenticProcessDefinition extends Hydrator<CollaborationAgenticProcessDefinition> {

  constructor(model?: Partial<CollaborationAgenticProcessDefinition>) {
    super(model);
    if (model) {
      this.agents = model.agents ? Object.entries(model.agents).reduce((acc, [key, m]) => { acc[key] = new AgentDefinition(m); return acc; }, {} as Record<string, AgentDefinition>) : {};
      if (model.strategy) this.strategy = new CollaborationStrategyDefinition(model.strategy);
    }
  }

  /**
   * Gets/sets the collection of named agents that participate in this process
   */
  @RecordTransform(AgentDefinition)
  agents: Record<string, AgentDefinition>;

  /**
   * Gets/sets the definition of the collaboration process's strategy
   */
  @Type(() => CollaborationStrategyDefinition)
  strategy: CollaborationStrategyDefinition;
}