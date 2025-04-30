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
import { A2AChannelConfiguration } from './a2a-channel-configuration';
import { Exclude, Expose, Type } from 'class-transformer';
import { AgentCommunicationChannelType } from '../enums/agent-communication-channel-type';

/**
 * Represents the definition of protocol-specific configuration options for communicating with a remote agent
 */
export class AgentCommunicationChannelDefinition extends Hydrator<AgentCommunicationChannelDefinition> {
  constructor(model?: Partial<AgentCommunicationChannelDefinition>) {
    super(model);
    if (model) {
      if (model.a2A) this.a2A = new A2AChannelConfiguration(model.a2A);
    }
    Object.defineProperty(this, 'type', {
      get() {
        return this?.a2A != null ? AgentCommunicationChannelType.A2A : '';
      },
      enumerable: true,
      configurable: true,
    });
  }

  /**
   * Gets/sets the configuration for the Agent-to-Agent (A2A) communication protocol
   */
  @Expose({ name: 'a2a' })
  @Type(() => A2AChannelConfiguration)
  a2A?: A2AChannelConfiguration;

  /**
   * Gets the agent's type
   */
  @Exclude()
  type?: string;
}
