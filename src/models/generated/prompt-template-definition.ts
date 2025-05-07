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
import { InputVariableDefinition } from './input-variable-definition';
import { OutputVariableDefinition } from './output-variable-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a prompt template, including its format, content, input variables, and expected output.
 */
export class PromptTemplateDefinition extends ReferenceableComponentDefinition {
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
   * Gets or sets the raw content of the prompt template.
   */
  content: string;

  /**
   * Gets or sets the format used for interpreting the prompt template (e.g., 'semantic-kernel', 'handlebars', 'liquid', or 'echo').
   */
  format: string;

  /**
   * Gets or sets a list of input variables, if any, that are referenced within the template.
   */
  @Type(() => InputVariableDefinition)
  inputVariables?: InputVariableDefinition[];

  /**
   * Gets or sets the definition of the output variable produced by the template, if any.
   */
  @Type(() => OutputVariableDefinition)
  outputVariable?: OutputVariableDefinition;
}
