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
 * Represents the definition of an output variable returned by a function or prompt.
 */
export class OutputVariableDefinition extends Hydrator<OutputVariableDefinition> {
  constructor(model?: Partial<OutputVariableDefinition>) {
    super(model);
  }

  /**
   * Gets or sets a human-readable description of the output variable, if any.
   */
  description?: string;

  /**
   * Gets or sets a JSON schema that describes the structure and constraints of the output variable.
   */
  schema?: JsonSchema;
}
