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
import { InputDataModelDefinition } from './input-data-model-definition';
import { OutputDataModelDefinition } from './output-data-model-definition';
import { Exclude, Type } from 'class-transformer';

/**
 * Represents the definition of a workflow task.
 */
export class TaskDefinition extends ComponentDefinition {
  constructor(model?: Partial<TaskDefinition>) {
    super(model);
    if (model) {
      if (model.input) this.input = new InputDataModelDefinition(model.input);
      if (model.output) this.output = new OutputDataModelDefinition(model.output);
      if (model.export) this.export = new OutputDataModelDefinition(model.export);
      this.metadata = model.metadata ? model.metadata : {};
    }
  }

  /**
   * Gets the type of the defined task
   */
  @Exclude()
  type?: string;

  /**
   * Gets or sets the definition of the task's input data, if any. This can define a schema and/or expressions used to prepare input data from the parent scope.
   */
  @Type(() => InputDataModelDefinition)
  input?: InputDataModelDefinition;

  /**
   * Gets or sets the definition of the task's output data, if any. This can define a schema and/or expressions used to expose output data to the parent scope.
   */
  @Type(() => OutputDataModelDefinition)
  output?: OutputDataModelDefinition;

  /**
   * Gets or sets the optional configuration for exporting data from the task to the broader workflow context.
   */
  @Type(() => OutputDataModelDefinition)
  export?: OutputDataModelDefinition;

  /**
   * A key/value mapping of additional information associated with the task
   */
  metadata?: Record<string, any>;
}
