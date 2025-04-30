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
import { Type } from 'class-transformer';

/**
 * Represents the definition of kernel-backed function that performs reasoning, transformation, or decision-making. Kernel functions encapsulate prompt templates and model-specific configuration, and are invoked by agents or processes to execute structured tasks
 */
export class KernelFunctionDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<KernelFunctionDefinition>) {
    super(model);
    if (model) {
      if (model.template) this.template = new PromptTemplateDefinition(model.template);
      this.parameters = model.parameters ? model.parameters : [];
    }
  }

  /**
   * Gets/sets the function's prompt template
   */
  @Type(() => PromptTemplateDefinition)
  template: PromptTemplateDefinition;

  /**
   * Gets/sets a list containing the names of the parameters, if any, to exclude from being encoded
   */
  parameters?: string[];
}
