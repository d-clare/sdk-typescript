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

import { ComponentDefinition } from './component-definition';

/**
 * Represents a reusable component definition that can either be declared inline or referenced by name.
 */
export class ReferenceableComponentDefinition extends ComponentDefinition {
  constructor(model?: Partial<ReferenceableComponentDefinition>) {
    super(model);
  }

  /**
   * Gets or sets the name of a previously defined component to reference instead of defining it inline.  If this property is set, the inline definition is ignored.
   */
  use?: string;
}
