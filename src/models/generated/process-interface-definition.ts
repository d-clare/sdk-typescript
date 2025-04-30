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

import { ProcessDefinition } from './process-definition';
import { InterfaceEndpointCollectionDefinition } from './interface-endpoint-collection-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of an interface to a process exposed by the application
 */
export class ProcessInterfaceDefinition extends ProcessDefinition {
  constructor(model?: Partial<ProcessInterfaceDefinition>) {
    super(model);
    if (model) {
      if (model.endpoints) this.endpoints = new InterfaceEndpointCollectionDefinition(model.endpoints);
    }
  }

  /**
   * The access points through which the process interface is made available
   */
  @Type(() => InterfaceEndpointCollectionDefinition)
  endpoints: InterfaceEndpointCollectionDefinition;
}
