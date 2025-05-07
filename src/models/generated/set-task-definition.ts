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

import { TaskDefinition } from './task-definition';

/**
 * Represents the definition of a task used to assign values to one or more variables in the data scope.
 */
export class SetTaskDefinition extends TaskDefinition {
  constructor(model?: Partial<SetTaskDefinition>) {
    super(model);
  }

  /**
   * Gets or sets the mapping of variables to values to assign.
   */
  set: Record<string, any>;
}
