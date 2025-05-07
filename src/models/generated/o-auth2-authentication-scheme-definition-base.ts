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
import { OAuth2AuthenticationClientDefinition } from './o-auth2-authentication-client-definition';
import { OAuth2AuthenticationRequestDefinition } from './o-auth2-authentication-request-definition';
import { OAuth2TokenDefinition } from './o-auth2-token-definition';
import { Type } from 'class-transformer';

/**
 * Represents the base class for all OAuth 2.0 authentication scheme definitions, including standard fields for authority, client credentials, grant type, scopes, and token exchange options.
 */
export class OAuth2AuthenticationSchemeDefinitionBase extends AuthenticationSchemeDefinition {
  constructor(model?: Partial<OAuth2AuthenticationSchemeDefinitionBase>) {
    super(model);
    if (model) {
      if (model.client) this.client = new OAuth2AuthenticationClientDefinition(model.client);
      if (model.request) this.request = new OAuth2AuthenticationRequestDefinition(model.request);
      this.issuers = model.issuers ? model.issuers : [];
      this.scopes = model.scopes ? model.scopes : [];
      this.audiences = model.audiences ? model.audiences : [];
      if (model.subject) this.subject = new OAuth2TokenDefinition(model.subject);
      if (model.actor) this.actor = new OAuth2TokenDefinition(model.actor);
    }
  }

  /**
   * Gets or sets the URI of the OAuth 2.0 authority (authorization server).
   */
  authority: string;

  /**
   * Gets or sets the OAuth 2.0 grant type to use for authentication.
   */
  grant?: string;

  /**
   * Gets or sets the client credentials used for authentication.
   */
  @Type(() => OAuth2AuthenticationClientDefinition)
  client?: OAuth2AuthenticationClientDefinition;

  /**
   * Gets or sets additional request parameters for the authentication request.
   */
  @Type(() => OAuth2AuthenticationRequestDefinition)
  request?: OAuth2AuthenticationRequestDefinition;

  /**
   * Gets or sets a list of expected valid issuers to verify against the token's issuer.
   */
  issuers?: string[];

  /**
   * Gets or sets the scopes to request in the token.
   */
  scopes?: string[];

  /**
   * Gets or sets the audiences to request in the token.
   */
  audiences?: string[];

  /**
   * Gets or sets the username for the resource owner. Only applicable when the grant type is 'password'.
   */
  username?: string;

  /**
   * Gets or sets the password for the resource owner. Only applicable when the grant type is 'password'.
   */
  password?: string;

  /**
   * Gets or sets the subject token for token exchange. Required when using the 'token_exchange' grant type.
   */
  @Type(() => OAuth2TokenDefinition)
  subject?: OAuth2TokenDefinition;

  /**
   * Gets or sets the actor token used for token exchange to represent the acting party.
   */
  @Type(() => OAuth2TokenDefinition)
  actor?: OAuth2TokenDefinition;
}
