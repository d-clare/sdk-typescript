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

import { AuthenticationSchemeDefinition } from './authentication-scheme-definition';
import { AuthenticationScheme } from '../enums/authentication-scheme';

/**
 * Represents the definition of an API key authentication scheme
 */
export class ApiKeyAuthenticationSchemeDefinition extends AuthenticationSchemeDefinition {
  constructor(model?: Partial<ApiKeyAuthenticationSchemeDefinition>) {
    super(model);
    this.scheme = AuthenticationScheme.ApiKey;
  }

  /**
   * Gets/sets the key used for authentication
   */
  key: string;
}
