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
 * Represents the definition of an HTTP transport for the Model Context Protocol
 */
export class McpHttpTransportDefinition extends Hydrator<McpHttpTransportDefinition> {
  constructor(model?: Partial<McpHttpTransportDefinition>) {
    super(model);
    if (model) {
      if (model.endpoint) this.endpoint = new EndpointDefinition(model.endpoint);
      this.headers = model.headers ? model.headers : {};
    }
  }

  /**
   * Gets/sets the endpoint at which to get the defined resource
   */
  @Type(() => EndpointDefinition)
  endpoint: EndpointDefinition;

  /**
   * Gets/sets a key/value mapping, if any, of the headers to use to connect to the MCP server
   */
  headers?: Record<string, string>;
}
