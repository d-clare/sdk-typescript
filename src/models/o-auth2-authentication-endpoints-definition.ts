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
 * Represents the configuration of OAUTH2 endpoints
 */
export class OAuth2AuthenticationEndpointsDefinition extends Hydrator<OAuth2AuthenticationEndpointsDefinition> {

  constructor(model?: Partial<OAuth2AuthenticationEndpointsDefinition>) {
    super(model);
    this.token = "/oauth2/token";
    this.revocation = "/oauth2/revoke";
    this.introspection = "/oauth2/introspect";
  }

  /**
   * Gets/sets the relative path to the token endpoint. Defaults to `/oauth2/token`
   */
  token: string;

  /**
   * Gets/sets the relative path to the revocation endpoint. Defaults to `/oauth2/revoke`
   */
  revocation: string;

  /**
   * Gets/sets the relative path to the introspection endpoint. Defaults to `/oauth2/introspect`
   */
  introspection: string;
}