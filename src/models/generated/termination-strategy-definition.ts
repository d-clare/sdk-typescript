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

import { KernelFunctionStrategyDefinition } from './kernel-function-strategy-definition';

/**
 * Represents a kernel function strategy used to determine whether or not to terminate the chat
 */
export class TerminationStrategyDefinition extends KernelFunctionStrategyDefinition {
  constructor(model?: Partial<TerminationStrategyDefinition>) {
    super(model);
    if (model) {
      this.agents = model.agents ? model.agents : [];
    }
  }

  /**
   * The name of the variable used to store the name of the agent being evaluated
   */
  agentVariableName: string;

  /**
   * The name of the variable used to store the chat history
   */
  historyVariableName: string;

  /**
   * A list containing the names of the agents for which this strategy is applicable<para></para>  By default value, any agent is evaluated
   */
  agents?: string[];

  /**
   * The maximum number of agent interactions for a given chat invocation
   */
  maximumIterations: number;
}
