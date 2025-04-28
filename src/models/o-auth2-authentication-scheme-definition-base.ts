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
 * Represents the base class for all authentication schemes based on OAUTH2
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
   * Gets/sets the uri that references the OAUTH2 authority to use
   */
  authority: string;

  /**
   * Gets/sets the grant type to use. See @see {@link OAuth2GrantType}
   */
  grant?: string;

  /**
   * Gets/sets the definition of the client to use
   */
  @Type(() => OAuth2AuthenticationClientDefinition)
  client?: OAuth2AuthenticationClientDefinition;

  /**
   * Gets/sets the configuration of the authentication request to perform
   */
  @Type(() => OAuth2AuthenticationRequestDefinition)
  request?: OAuth2AuthenticationRequestDefinition;

  /**
   * Gets/sets a list, if any, that contains valid issuers that will be used to check against the issuer of generated tokens
   */
  issuers?: string[];

  /**
   * Gets/sets the scopes, if any, to request the token for
   */
  scopes?: string[];

  /**
   * Gets/sets the audiences, if any, to request the token for
   */
  audiences?: string[];

  /**
   * Gets/sets the username to use. Used only if @see {@link Models.Authentication.OAuth2AuthenticationSchemeDefinitionBase.Grant} is @see {@link OAuth2GrantType.Password}
   */
  username?: string;

  /**
   * Gets/sets the password to use. Used only if @see {@link Models.Authentication.OAuth2AuthenticationSchemeDefinitionBase.Grant} is @see {@link OAuth2GrantType.Password}
   */
  password?: string;

  /**
   * Gets/sets the security token that represents the identity of the party on behalf of whom the request is being made. Used only if @see {@link Models.Authentication.OAuth2AuthenticationSchemeDefinitionBase.Grant} is @see {@link OAuth2GrantType.TokenExchange}, in which case it is required
   */
  @Type(() => OAuth2TokenDefinition)
  subject?: OAuth2TokenDefinition;

  /**
   * Gets/sets the security token that represents the identity of the acting party. Typically, this will be the party that is authorized to use the requested security token and act on behalf of the subject.  Used only if @see {@link Models.Authentication.OAuth2AuthenticationSchemeDefinitionBase.Grant} is @see {@link OAuth2GrantType.TokenExchange}, in which case it is required
   */
  @Type(() => OAuth2TokenDefinition)
  actor?: OAuth2TokenDefinition;
}