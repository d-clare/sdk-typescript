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
 * Represents the definition of the API used to invoke the embedding model provider.
 */
export class EmbeddingApiDefinition extends Hydrator<EmbeddingApiDefinition> {
  constructor(model?: Partial<EmbeddingApiDefinition>) {
    super(model);
    if (model) {
      if (model.endpoint) this.endpoint = model.endpoint;
      this.properties = model.properties ? model.properties : {};
    }
  }

  /**
   * Gets or sets the API endpoint used to access the embedding provider.
   */
  endpoint: EndpointDefinition | string;

  /**
   * Gets or sets a dictionary of additional provider-specific configuration properties.
   */
  properties?: Record<string, any>;
}
