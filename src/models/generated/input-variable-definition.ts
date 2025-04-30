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
 * Represents the definition of an input variable
 */
export class InputVariableDefinition extends Hydrator<InputVariableDefinition> {
  constructor(model?: Partial<InputVariableDefinition>) {
    super(model);
  }

  /**
   * The variable's name
   */
  name: string;

  /**
   * The variable's description, if any
   */
  description?: string;

  /**
   * The variable's default value, if any
   */
  default?: any;

  /**
   * The a sample value for the variable, if any
   */
  sample?: any;

  /**
   * A boolean indicating whether or not the variable is required
   */
  required: boolean;

  /**
   * A boolean indicating whether or not to handle the variable value as potential dangerous content
   */
  allowDangerousContent: boolean;

  /**
   * The JSON schema, if any, used to describe the variable
   */
  schema?: JsonSchema;
}
