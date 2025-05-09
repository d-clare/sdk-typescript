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
import { AuthenticationPolicyDefinition } from './authentication-policy-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of an endpoint
 */
export class EndpointDefinition extends Hydrator<EndpointDefinition> {
  constructor(model?: Partial<EndpointDefinition>) {
    super(model);
    if (model) {
      if (model.authentication) this.authentication = new AuthenticationPolicyDefinition(model.authentication);
    }
  }

  /**
   * Gets or sets the endpoint URI.
   */
  uri?: string;

  /**
   * Gets or sets the authentication policy required to access the API endpoint, if any.
   */
  @Type(() => AuthenticationPolicyDefinition)
  authentication?: AuthenticationPolicyDefinition;
}
