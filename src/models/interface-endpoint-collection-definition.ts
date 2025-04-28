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
import { HttpInterfaceDefinition } from './http-interface-definition';
import { Expose, Type } from 'class-transformer';

/**
 * Represents the definition of the access points through which an application interface is made available
 */
export class InterfaceEndpointCollectionDefinition extends Hydrator<InterfaceEndpointCollectionDefinition> {

  constructor(model?: Partial<InterfaceEndpointCollectionDefinition>) {
    super(model);
    if (model) {
      if (model.http) this.http = new HttpInterfaceDefinition(model.http);
    }
  }

  /**
   * Gets/sets a boolean indicating whether or not the interface is publicly documented and accessible via the A2A protocol
   */
  @Expose({ name: 'a2a' })
  a2A: boolean;

  /**
   * Gets/sets the HTTP-specific configuration used to expose the interface over standard web protocols
   */
  @Type(() => HttpInterfaceDefinition)
  http?: HttpInterfaceDefinition;
}