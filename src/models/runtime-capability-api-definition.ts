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
import { RuntimeCapabilityApiEndpointDefinition } from './runtime-capability-api-endpoint-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of the API used by a kernel capability
 */
export class RuntimeCapabilityApiDefinition extends Hydrator<RuntimeCapabilityApiDefinition> {
  constructor(model?: Partial<RuntimeCapabilityApiDefinition>) {
    super(model);
    if (model) {
      if (model.endpoint) this.endpoint = new RuntimeCapabilityApiEndpointDefinition(model.endpoint);
      this.properties = model.properties ? model.properties : {};
    }
  }

  /**
   * Gets/sets the API's endpoint
   */
  @Type(() => RuntimeCapabilityApiEndpointDefinition)
  endpoint?: RuntimeCapabilityApiEndpointDefinition;

  /**
   * Gets/sets a key/value mapping of the additional properties required, if any, to configure the API
   */
  properties?: Record<string, any>;
}
