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
 * Represents the metadata used to describe a manifest
 */
export class ManifestMetadata extends Hydrator<ManifestMetadata> {
  constructor(model?: Partial<ManifestMetadata>) {
    super(model);
    if (model) {
      this.tags = model.tags ? model.tags : [];
    }
  }

  /**
   * A unique, human-readable name used to identify the manifest in logs, dashboards, or registries
   */
  name: string;

  /**
   * A brief summary explaining the purpose or scope of the manifest. Useful for documentation or discovery
   */
  description?: string;

  /**
   * The manifest's version, following semantic versioning 2.0.0
   */
  version: string;

  /**
   * An optional list of keywords or labels used to categorize or filter manifests by theme, domain, or capability
   */
  tags?: string[];
}
