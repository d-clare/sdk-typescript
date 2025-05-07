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

/**
 * Represents the definition of a STDIO transport for the Model Context Protocol (MCP), used to launch and communicate with an external process via standard input/output streams.
 */
export class McpStdioTransportDefinition extends Hydrator<McpStdioTransportDefinition> {
  constructor(model?: Partial<McpStdioTransportDefinition>) {
    super(model);
    if (model) {
      this.arguments = model.arguments ? model.arguments : [];
    }
  }

  /**
   * Gets or sets the command to execute the MCP tool.
   */
  command: string;

  /**
   * Gets or sets an optional list of arguments to pass to the command.
   */
  arguments?: string[];
}
