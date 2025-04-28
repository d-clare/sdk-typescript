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
import { RuntimeCapabilityApiDefinition } from './runtime-capability-api-definition';
import { Type } from 'class-transformer';

/**
 * Represents the configuration of a reasoning capability within a kernel environment
 */
export class ReasoningCapabilityDefinition extends Hydrator<ReasoningCapabilityDefinition> {

  constructor(model?: Partial<ReasoningCapabilityDefinition>) {
    super(model);
    if (model) {
      if (model.api) this.api = new RuntimeCapabilityApiDefinition(model.api);
      this.settings = model.settings ? model.settings : {};
    }
  }

  /**
   * Gets/sets the identifier of the model provider to use for reasoning
   */
  provider: string;

  /**
   * Gets/sets the model name to be used for the reasoning operation
   */
  model: string;

  /**
   * Gets/sets the definition of the reasoning API to use
   */
  @Type(() => RuntimeCapabilityApiDefinition)
  api: RuntimeCapabilityApiDefinition;

  /**
   * Gets/sets the optional provider-specific parameters used when invoking the model, such as temperature, top_p, max_tokens, stop, etc.
   */
  settings?: Record<string, any>;
}