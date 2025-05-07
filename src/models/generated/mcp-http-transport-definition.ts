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
 * Represents the definition of an HTTP transport for the Model Context Protocol (MCP).
 */
export class McpHttpTransportDefinition extends Hydrator<McpHttpTransportDefinition> {
  constructor(model?: Partial<McpHttpTransportDefinition>) {
    super(model);
    if (model) {
      if (model.endpoint) this.endpoint = model.endpoint;
      this.headers = model.headers ? model.headers : {};
    }
  }

  /**
   * Gets or sets the endpoint used to connect to the MCP server.
   */
  endpoint: EndpointDefinition | string;

  /**
   * Gets or sets a key/value mapping of the HTTP headers to send with the request, if any.
   */
  headers?: Record<string, string>;
}
