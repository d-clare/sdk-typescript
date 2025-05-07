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
import { McpTransportDefinition } from './mcp-transport-definition';
import { McpClientDefinition } from './mcp-client-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a toolset based on the Model Context Protocol (MCP),  including how to connect to the MCP server and which client to use.
 */
export class McpToolsetDefinition extends Hydrator<McpToolsetDefinition> {
  constructor(model?: Partial<McpToolsetDefinition>) {
    super(model);
    if (model) {
      if (model.transport) this.transport = new McpTransportDefinition(model.transport);
      if (model.client) this.client = new McpClientDefinition(model.client);
    }
  }

  /**
   * Gets or sets the definition of the transport to use to connect to the MCP server.
   */
  @Type(() => McpTransportDefinition)
  transport: McpTransportDefinition;

  /**
   * Gets or sets the definition of the client to use to connect to the MCP server.
   */
  @Type(() => McpClientDefinition)
  client?: McpClientDefinition;
}
