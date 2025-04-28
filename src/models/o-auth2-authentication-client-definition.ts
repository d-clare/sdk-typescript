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
 * Represents the definition of an OAUTH2 client
 */
export class OAuth2AuthenticationClientDefinition extends Hydrator<OAuth2AuthenticationClientDefinition> {

  constructor(model?: Partial<OAuth2AuthenticationClientDefinition>) {
    super(model);
  }

  /**
   * Gets/sets the OAUTH2 `client_id` to use. Required if 'Authentication' has NOT been set to 'none'.
   */
  id?: string;

  /**
   * Gets/sets the OAUTH2 `client_secret` to use, if any
   */
  secret?: string;

  /**
   * Gets/sets a JWT containing a signed assertion with the application credentials
   */
  assertion?: string;

  /**
   * Gets/sets the authentication method to use to authenticate the client. Defaults to 'client_secret_post'. See @see {@link OAuth2ClientAuthenticationMethod}
   */
  authentication?: string;
}