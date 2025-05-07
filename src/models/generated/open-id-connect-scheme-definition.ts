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
import { AuthenticationScheme } from '../../enums/generated/authentication-scheme';

/**
 * Represents the definition of an OpenID Connect (OIDC) authentication scheme, based on OAuth 2.0, supporting identity tokens and discovery.
 */
export class OpenIDConnectSchemeDefinition extends OAuth2AuthenticationSchemeDefinitionBase {
  constructor(model?: Partial<OpenIDConnectSchemeDefinition>) {
    super(model);
    this.scheme = AuthenticationScheme.OpenIDConnect;
  }
}
