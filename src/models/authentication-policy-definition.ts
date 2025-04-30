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
import { ApiKeyAuthenticationSchemeDefinition } from './api-key-authentication-scheme-definition';
import { BearerAuthenticationSchemeDefinition } from './bearer-authentication-scheme-definition';
import { OAuth2AuthenticationSchemeDefinition } from './o-auth2-authentication-scheme-definition';
import { OpenIDConnectSchemeDefinition } from './open-id-connect-scheme-definition';
import { Exclude, Expose, Type } from 'class-transformer';

/**
 * Represents the definition of an authentication policy
 */
export class AuthenticationPolicyDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<AuthenticationPolicyDefinition>) {
    super(model);
    if (model) {
      if (model.apiKey) this.apiKey = new ApiKeyAuthenticationSchemeDefinition(model.apiKey);
      if (model.bearer) this.bearer = new BearerAuthenticationSchemeDefinition(model.bearer);
      if (model.oAuth2) this.oAuth2 = new OAuth2AuthenticationSchemeDefinition(model.oAuth2);
      if (model.oidc) this.oidc = new OpenIDConnectSchemeDefinition(model.oidc);
    }
  }

  /**
   * Gets the configured authentication scheme
   */
  @Exclude()
  scheme?: string;

  /**
   * Gets/sets the `ApiKey` authentication scheme to use, if any
   */
  @Expose({ name: 'apikey' })
  @Type(() => ApiKeyAuthenticationSchemeDefinition)
  apiKey?: ApiKeyAuthenticationSchemeDefinition;

  /**
   * Gets/sets the `Bearer` authentication scheme to use, if any
   */
  @Type(() => BearerAuthenticationSchemeDefinition)
  bearer?: BearerAuthenticationSchemeDefinition;

  /**
   * Gets/sets the `OAUTH2` authentication scheme to use, if any
   */
  @Expose({ name: 'oauth2' })
  @Type(() => OAuth2AuthenticationSchemeDefinition)
  oAuth2?: OAuth2AuthenticationSchemeDefinition;

  /**
   * Gets/sets the `OIDC` authentication scheme to use, if any
   */
  @Type(() => OpenIDConnectSchemeDefinition)
  oidc?: OpenIDConnectSchemeDefinition;
}
