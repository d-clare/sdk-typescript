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
import { WorkflowDefinitionMetadata } from './workflow-definition-metadata';
import { ComponentCollectionDefinition } from './component-collection-definition';
import { TaskDefinition } from './task-definition';
import { Type } from 'class-transformer';
import { RecordTransform } from '../../transformers/record-transform';

/**
 * Represents the definition of an agentic workflow.
 */
export class WorkflowDefinition extends Hydrator<WorkflowDefinition> {
  constructor(model?: Partial<WorkflowDefinition>) {
    super(model);
    if (model) {
      if (model.metadata) this.metadata = new WorkflowDefinitionMetadata(model.metadata);
      if (model.components) this.components = new ComponentCollectionDefinition(model.components);
      this.do = model.do
        ? Object.entries(model.do).reduce(
            (acc, [key, m]) => {
              acc[key] = new TaskDefinition(m);
              return acc;
            },
            {} as Record<string, TaskDefinition>
          )
        : {};
    }
  }

  /**
   * Gets or sets the metadata used to describe with the workflow definition.
   */
  @Type(() => WorkflowDefinitionMetadata)
  metadata: WorkflowDefinitionMetadata;

  /**
   * Gets or sets a collection of reusable components, if any, that can be referenced within the workflow.
   */
  @Type(() => ComponentCollectionDefinition)
  components?: ComponentCollectionDefinition;

  /**
   * Gets or sets the tasks to execute as part of the workflow. The key represents the task name, and the value is its definition.
   */
  @RecordTransform(TaskDefinition)
  do: Record<string, TaskDefinition>;
}
