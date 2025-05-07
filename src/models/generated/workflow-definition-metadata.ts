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
 * Represents an object used to describe an agentic workflow.
 */
export class WorkflowDefinitionMetadata extends Hydrator<WorkflowDefinitionMetadata> {
  constructor(model?: Partial<WorkflowDefinitionMetadata>) {
    super(model);
    if (model) {
      this.tags = model.tags ? model.tags : [];
    }
  }

  /**
   * Gets or sets the workflow's name. Must conform to the DNS label specification (RFC 1123): lower-case alphanumeric characters, hyphens ('-'), and periods ('.'), starting and ending with an alphanumeric character.
   */
  name: string;

  /**
   * Gets or sets the workflow's semantic version.
   */
  version: string;

  /**
   * Gets or sets the description of the workflow, which is intended to provide context or documentation for the workflow. Supports Markdown.
   */
  description?: string;

  /**
   * An optional list of keywords or labels used to categorize or filter manifests by theme, domain, or capability.
   */
  tags?: string[];
}
