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
import { InputVariableDefinition } from './input-variable-definition';
import { OutputVariableDefinition } from './output-variable-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a prompt template
 */
export class PromptTemplateDefinition extends Hydrator<PromptTemplateDefinition> {
  constructor(model?: Partial<PromptTemplateDefinition>) {
    super(model);
    if (model) {
      this.inputVariables = model.inputVariables
        ? model.inputVariables.map((m: any) => new InputVariableDefinition(m))
        : [];
      if (model.outputVariable) this.outputVariable = new OutputVariableDefinition(model.outputVariable);
    }
  }

  /**
   * Gets/sets the template content to use for prompt generation, including placeholders for input variables
   */
  content: string;

  /**
   * Gets/sets the optional format of the prompt template
   */
  format?: string;

  /**
   * Gets/sets a list of input variables, if any, used within the template
   */
  @Type(() => InputVariableDefinition)
  inputVariables?: InputVariableDefinition[];

  /**
   * Gets/sets the definition of the expected output variable, if any, for the result produced by the prompt
   */
  @Type(() => OutputVariableDefinition)
  outputVariable?: OutputVariableDefinition;
}
