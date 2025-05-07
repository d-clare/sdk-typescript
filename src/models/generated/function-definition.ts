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
import { PromptTemplateDefinition } from './prompt-template-definition';
import { LlmDefinition } from './llm-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a function, including its prompt, LLM configuration, and optional parameter handling.
 */
export class FunctionDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<FunctionDefinition>) {
    super(model);
    if (model) {
      if (model.prompt) this.prompt = new PromptTemplateDefinition(model.prompt);
      this.parameters = model.parameters ? model.parameters : [];
      if (model.llm) this.llm = new LlmDefinition(model.llm);
    }
  }

  /**
   * Gets or sets the prompt template used to define the function's behavior.
   */
  @Type(() => PromptTemplateDefinition)
  prompt: PromptTemplateDefinition;

  /**
   * Gets or sets a list of parameter names that should not be automatically encoded.
   */
  parameters?: string[];

  /**
   * Gets or sets the definition of the LLM used to execute the function.
   */
  @Type(() => LlmDefinition)
  llm: LlmDefinition;
}
