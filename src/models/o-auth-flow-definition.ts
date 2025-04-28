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


import { Hydrator } from '../hydrator';

/**
 * Represents an object used to define a supported OAuth Flow
 */
export class OAuthFlowDefinition extends Hydrator<OAuthFlowDefinition> {

  constructor(model?: Partial<OAuthFlowDefinition>) {
    super(model);
    if (model) {
      this.scopes = model.scopes ? model.scopes : {};
    }
  }

  /**
   * Gets/sets the authorization URL to be used for this flow<para></para>  Required if the configured flow is `implicit` or `authorizationCode`, otherwise ignored
   */
  authorizationUrl?: string;

  /**
   * Gets/sets the token URL to be used for this flow<para></para>  Required if the configured flow is `password`, `clientCredentials` or `authorizationCode`, otherwise ignored
   */
  tokenUrl?: string;

  /**
   * Gets/sets the URL to be used for obtaining refresh tokens<para></para>  Required if the configured flow is `oauth2`, otherwise ignored
   */
  refreshUrl?: string;

  /**
   * Gets/sets a map, if any, between the name and description of available scopes for the OAuth2 security scheme
   */
  scopes?: Record<string, string>;
}