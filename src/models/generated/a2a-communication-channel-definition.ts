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
import { EndpointDefinition } from './endpoint-definition';

/**
 * Represents the configuration for an Agent-to-Agent (A2A) communication channel.
 */
export class A2ACommunicationChannelDefinition extends Hydrator<A2ACommunicationChannelDefinition> {
  constructor(model?: Partial<A2ACommunicationChannelDefinition>) {
    super(model);
    if (model) {
      if (model.endpoint) this.endpoint = model.endpoint;
    }
  }

  /**
   * Gets or sets the endpoint definition used to communicate with the remote agent.
   */
  endpoint: EndpointDefinition | string;

  /**
   * Gets or sets the unique name used to identify the remote agent.
   */
  name?: string;
}
