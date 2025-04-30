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
import { McpHttpTransportDefinition } from './mcp-http-transport-definition';
import { McpStdioTransportDefinition } from './mcp-stdio-transport-definition';
import { Exclude, Type } from 'class-transformer';
import { McpTransportType } from '../enums/mcp-transport-type';

/**
 * Represents the definition of the transport to use to connect to an MCP server
 */
export class McpTransportDefinition extends Hydrator<McpTransportDefinition> {
  constructor(model?: Partial<McpTransportDefinition>) {
    super(model);
    if (model) {
      if (model.http) this.http = new McpHttpTransportDefinition(model.http);
      if (model.stdio) this.stdio = new McpStdioTransportDefinition(model.stdio);
      this.options = model.options ? model.options : {};
    }
    Object.defineProperty(this, 'type', {
      get() {
        return this?.http != null ? McpTransportType.Http : this?.stdio != null ? McpTransportType.Stdio : '';
      },
      enumerable: true,
      configurable: true,
    });
  }

  /**
   * Gets/sets the definition of an HTTP transport for the Model Context Protocol
   */
  @Type(() => McpHttpTransportDefinition)
  http?: McpHttpTransportDefinition;

  /**
   * Gets/sets the definition of an STDIO transport for the Model Context Protocol
   */
  @Type(() => McpStdioTransportDefinition)
  stdio?: McpStdioTransportDefinition;

  /**
   * Gets/sets additional transport-specific configuration, if any
   */
  options?: Record<string, string>;

  /**
   * Gets the MCP transport's type based on which definition is present (either `Http` or `Stdio`)
   */
  @Exclude()
  type?: string;
}
