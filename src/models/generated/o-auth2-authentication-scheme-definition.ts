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

import { OAuth2AuthenticationSchemeDefinitionBase } from './o-auth2-authentication-scheme-definition-base';
import { OAuth2AuthenticationEndpointsDefinition } from './o-auth2-authentication-endpoints-definition';
import { Type } from 'class-transformer';
import { AuthenticationScheme } from '../../enums/generated/authentication-scheme';

/**
 * Represents the definition of an OAuth 2.0 authentication scheme, including required endpoints and flow configuration.
 */
export class OAuth2AuthenticationSchemeDefinition extends OAuth2AuthenticationSchemeDefinitionBase {
  constructor(model?: Partial<OAuth2AuthenticationSchemeDefinition>) {
    super(model);
    if (model) {
      if (model.endpoints) this.endpoints = new OAuth2AuthenticationEndpointsDefinition(model.endpoints);
    }
    this.scheme = AuthenticationScheme.OAuth2;
  }

  /**
   * Gets or sets the configuration of the OAuth 2.0 endpoints to use for authorization, token exchange, and optionally revocation or introspection.
   */
  @Type(() => OAuth2AuthenticationEndpointsDefinition)
  endpoints: OAuth2AuthenticationEndpointsDefinition;
}
