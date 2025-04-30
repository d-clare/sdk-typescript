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
 * Represents the definition of a strategy that defines how an agent should synthesize its output before storing it into memory
 */
export class AgentMemorySynthetizationStrategyDefinition extends KernelFunctionStrategyDefinition {
  constructor(model?: Partial<AgentMemorySynthetizationStrategyDefinition>) {
    super(model);
  }
}
