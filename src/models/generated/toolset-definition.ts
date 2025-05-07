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

import { ReferenceableComponentDefinition } from './referenceable-component-definition';
import { McpToolsetDefinition } from './mcp-toolset-definition';
import { OpenApiToolsetDefinition } from './open-api-toolset-definition';
import { Exclude, Expose, Type } from 'class-transformer';

/**
 * Represents the definition of a toolset, which may be described using either the Model Context Protocol (MCP) or an OpenAPI specification document.
 */
export class ToolsetDefinition extends ReferenceableComponentDefinition {
  constructor(model?: Partial<ToolsetDefinition>) {
    super(model);
    if (model) {
      if (model.mcp) this.mcp = new McpToolsetDefinition(model.mcp);
      if (model.openApi) this.openApi = new OpenApiToolsetDefinition(model.openApi);
    }
  }

  /**
   * Gets or sets the definition of a toolset based on the Model Context Protocol (MCP).
   */
  @Type(() => McpToolsetDefinition)
  mcp?: McpToolsetDefinition;

  /**
   * Gets or sets the definition of a toolset based on an OpenAPI specification document.
   */
  @Expose({ name: 'openapi' })
  @Type(() => OpenApiToolsetDefinition)
  openApi?: OpenApiToolsetDefinition;

  /**
   * Gets the type of the toolset based on which definition is present (either 'mcp' or 'openapi').
   */
  @Exclude()
  type?: string;
}
