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
import { EndpointDefinition } from './endpoint-definition';
import { Type } from 'class-transformer';

/**
 * Configuration settings specific to the A2A (Agent-to-Agent) communication protocol.
 */
export class A2AChannelConfiguration extends Hydrator<A2AChannelConfiguration> {
  constructor(model?: Partial<A2AChannelConfiguration>) {
    super(model);
    if (model) {
      if (model.endpoint) this.endpoint = new EndpointDefinition(model.endpoint);
    }
  }

  /**
   * Gets/sets the endpoint of the remote host used to perform A2A agent discovery<para></para>  This is not the agent’s direct message endpoint, but rather the host through which the agent is resolved
   */
  @Type(() => EndpointDefinition)
  endpoint: EndpointDefinition;

  /**
   * Gets/sets the name of the remote agent to select from the A2A discovery endpoint, in case multiple agents are available at the same host
   */
  name?: string;
}
