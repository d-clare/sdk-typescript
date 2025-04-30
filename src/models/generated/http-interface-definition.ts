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
import { SecuritySchemeDefinition } from './security-scheme-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of the HTTP interface through which an application component is exposed
 */
export class HttpInterfaceDefinition extends Hydrator<HttpInterfaceDefinition> {
  constructor(model?: Partial<HttpInterfaceDefinition>) {
    super(model);
    if (model) {
      if (model.authentication) this.authentication = new SecuritySchemeDefinition(model.authentication);
    }
  }

  /**
   * The relative URL path at which the component is exposed
   */
  path: string;

  /**
   * An object, if any, that describes the authentication method used to secure the access to the HTTP endpoint
   */
  @Type(() => SecuritySchemeDefinition)
  authentication?: SecuritySchemeDefinition;
}
