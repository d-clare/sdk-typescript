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
import { ConvergenceStrategyDefinition } from './convergence-strategy-definition';
import { Type } from 'class-transformer';

/**
 * Represents an agentic process in which multiple specialized agents are invoked using tailored sub-prompts, and a designated function synthesizes their responses into a single cohesive result.  A dedicated kernel function may optionally be used to split the initial user prompt into sub-prompts aligned with each agent's expertise.
 */
export class ConvergenceAgenticProcessDefinition extends Hydrator<ConvergenceAgenticProcessDefinition> {

  constructor(model?: Partial<ConvergenceAgenticProcessDefinition>) {
    super(model);
    if (model) {
      this.agents = model.agents ? Object.entries(model.agents).reduce((acc, [key, m]) => { acc[key] = new AgentDefinition(m); return acc; }, {} as Record<string, AgentDefinition>) : {};
      if (model.strategy) this.strategy = new ConvergenceStrategyDefinition(model.strategy);
    }
  }

  /**
   * Gets/sets the collection of named agents that participate in this process
   */
  agents: Record<string, AgentDefinition>;

  /**
   * Gets/sets the definition of the convergence process's strategy, if any
   */
  @Type(() => ConvergenceStrategyDefinition)
  strategy: ConvergenceStrategyDefinition;
}