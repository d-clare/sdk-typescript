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
import { CollaborationAgenticProcessDefinition } from './collaboration-agentic-process-definition';
import { ConvergenceAgenticProcessDefinition } from './convergence-agentic-process-definition';
import { Exclude, Type } from 'class-transformer';

/**
 * Represents a high-level orchestration process involving one or more agents
 */
export class ProcessDefinition extends Hydrator<ProcessDefinition> {

  constructor(model?: Partial<ProcessDefinition>) {
    super(model);
    if (model) {
      if (model.collaboration) this.collaboration = new CollaborationAgenticProcessDefinition(model.collaboration);
      if (model.convergence) this.convergence = new ConvergenceAgenticProcessDefinition(model.convergence);
    }
  }

  /**
   * Gets/sets the collaboration process to perform
   */
  @Type(() => CollaborationAgenticProcessDefinition)
  collaboration?: CollaborationAgenticProcessDefinition;

  /**
   * Gets/sets the convergence process to perform
   */
  @Type(() => ConvergenceAgenticProcessDefinition)
  convergence?: ConvergenceAgenticProcessDefinition;

  /**
   * Gets the type of agentic process
   */
  @Exclude()
  type: string;
}