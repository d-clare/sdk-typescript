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

/**
 * Represents the definition of an OAuth 2.0 client, including its credentials and authentication method.
 */
export class OAuth2AuthenticationClientDefinition extends Hydrator<OAuth2AuthenticationClientDefinition> {
  constructor(model?: Partial<OAuth2AuthenticationClientDefinition>) {
    super(model);
  }

  /**
   * Gets or sets the OAuth 2.0 `client_id` to use. Required unless the client authentication method is set to 'none'.
   */
  id?: string;

  /**
   * Gets or sets the OAuth 2.0 `client_secret` to use, if any.
   */
  secret?: string;

  /**
   * Gets or sets a signed JWT assertion to authenticate the client instead of using a client_secret.
   */
  assertion?: string;

  /**
   * Gets or sets the authentication method used by the client. Defaults to 'client_secret_post'.
   */
  authentication?: string;
}
