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

import { ReferenceableComponentDefinition } from './referenceable-component-definition';
import { LlmProviderDefinition } from './llm-provider-definition';
import { LlmApiDefinition } from './llm-api-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a Large Language Model (LLM) used for text generation and reasoning tasks.
 */
export class LlmDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<LlmDefinition>) {
    super(model);
    if (model) {
      if (model.provider) this.provider = model.provider;
      if (model.api) this.api = new LlmApiDefinition(model.api);
    }
  }

  /**
   * Gets or sets the definition of the LLM provider, including provider name and optional configuration.
   */
  provider: LlmProviderDefinition | string;

  /**
   * Gets or sets the name of the LLM model to use (e.g., 'gpt-4', 'mistral-7b', 'gemini-pro').
   */
  model: string;

  /**
   * Gets or sets the API configuration used to invoke the LLM, including authentication and endpoint details.
   */
  @Type(() => LlmApiDefinition)
  api: LlmApiDefinition;
}
