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
import { McpClientImplementationDefinition } from './mcp-client-implementation-definition';
import { Duration } from '../duration';
import { Type } from 'class-transformer';

/**
 * Represents the definition of the client to use to connect to an MCP server
 */
export class McpClientDefinition extends Hydrator<McpClientDefinition> {
  constructor(model?: Partial<McpClientDefinition>) {
    super(model);
    if (model) {
      if (model.implementation) this.implementation = new McpClientImplementationDefinition(model.implementation);
      if (model.timeout) this.timeout = new Duration(model.timeout);
    }
  }

  /**
   * The definition of the client implementation to use to connect to an MCP server
   */
  @Type(() => McpClientImplementationDefinition)
  implementation: McpClientImplementationDefinition;

  /**
   * The version of the MCP protocol to use
   */
  protocolVersion: string;

  /**
   * The duration, if any, after which requests to the MCP tool time out
   */
  @Type(() => Duration)
  timeout?: Duration;
}
