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
import { AuthenticationParameterPlacementDefinition } from './authentication-parameter-placement-definition';
import { Exclude, Type } from 'class-transformer';

/**
 * Represents the base class for all authentication scheme definitions
 */
export class AuthenticationSchemeDefinition extends Hydrator<AuthenticationSchemeDefinition> {

  constructor(model?: Partial<AuthenticationSchemeDefinition>) {
    super(model);
    if (model) {
      if (model.placement) this.placement = new AuthenticationParameterPlacementDefinition(model.placement);
    }
  }

  /**
   * Gets the name of the authentication scheme
   */
  @Exclude()
  scheme?: string;

  /**
   * Gets/sets the name of the secret, if any, used to configure the authentication scheme
   */
  use?: string;

  /**
   * Gets/sets the definition of the placement, if any, of the resolved authentication parameter
   */
  @Type(() => AuthenticationParameterPlacementDefinition)
  placement?: AuthenticationParameterPlacementDefinition;

  /**
   * Extension
   */
  [key: string]: any;
}