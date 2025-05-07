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

import { Hydrator } from '../../hydrator';
import { type JSONSchema as JsonSchema } from 'json-schema-typed';

/**
 * Represents the definition of an input variable used in a prompt template or function call.
 */
export class InputVariableDefinition extends Hydrator<InputVariableDefinition> {
  constructor(model?: Partial<InputVariableDefinition>) {
    super(model);
  }

  /**
   * Gets or sets the name of the variable.
   */
  name: string;

  /**
   * Gets or sets a human-readable description of the variable, if any.
   */
  description?: string;

  /**
   * Gets or sets a default value for the variable, used if no input is provided.
   */
  default?: any;

  /**
   * Gets or sets a sample value to illustrate typical usage.
   */
  sample?: any;

  /**
   * Gets or sets a value indicating whether this variable is required.
   */
  required: boolean;

  /**
   * Gets or sets a value indicating whether to allow potentially dangerous content in the variable.
   */
  allowDangerousContent: boolean;

  /**
   * Gets or sets a JSON schema definition describing the structure and constraints of the variable.
   */
  schema?: JsonSchema;
}
