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
import { Exclude } from 'class-transformer';

/**
 * Represents the abstract base class for all authentication scheme definitions, including shared properties like secret reference and parameter placement.
 */
export class AuthenticationSchemeDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<AuthenticationSchemeDefinition>) {
    super(model);
    if (model) {
      this.extensions = model.extensions ? model.extensions : {};
    }
  }

  /**
   * Gets the name of the authentication scheme (e.g., 'apikey', 'bearer', 'oauth2', 'oidc').
   */
  @Exclude()
  scheme?: string;

  /**
   * Gets or sets a key/value mapping of the object's extension data, if any
   */
  extensions?: Record<string, any>;
}
