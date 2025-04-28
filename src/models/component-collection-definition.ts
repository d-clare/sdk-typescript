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
import { AuthenticationPolicyDefinition } from './authentication-policy-definition';
import { ToolsetDefinition } from './toolset-definition';
import { KernelFunctionDefinition } from './kernel-function-definition';
import { KernelDefinition } from './kernel-definition';
import { MemoryDefinition } from './memory-definition';
import { AgentDefinition } from './agent-definition';
import { ProcessDefinition } from './process-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of a collection of reusable components
 */
export class ComponentCollectionDefinition extends Hydrator<ComponentCollectionDefinition> {

  constructor(model?: Partial<ComponentCollectionDefinition>) {
    super(model);
    if (model) {
      this.secrets = model.secrets ? model.secrets : [];
      this.authentications = model.authentications ? Object.entries(model.authentications).reduce((acc, [key, m]) => { acc[key] = new AuthenticationPolicyDefinition(m); return acc; }, {} as Record<string, AuthenticationPolicyDefinition>) : {};
      this.toolsets = model.toolsets ? Object.entries(model.toolsets).reduce((acc, [key, m]) => { acc[key] = new ToolsetDefinition(m); return acc; }, {} as Record<string, ToolsetDefinition>) : {};
      this.functions = model.functions ? Object.entries(model.functions).reduce((acc, [key, m]) => { acc[key] = new KernelFunctionDefinition(m); return acc; }, {} as Record<string, KernelFunctionDefinition>) : {};
      this.kernels = model.kernels ? Object.entries(model.kernels).reduce((acc, [key, m]) => { acc[key] = new KernelDefinition(m); return acc; }, {} as Record<string, KernelDefinition>) : {};
      this.memories = model.memories ? Object.entries(model.memories).reduce((acc, [key, m]) => { acc[key] = new MemoryDefinition(m); return acc; }, {} as Record<string, MemoryDefinition>) : {};
      this.agents = model.agents ? Object.entries(model.agents).reduce((acc, [key, m]) => { acc[key] = new AgentDefinition(m); return acc; }, {} as Record<string, AgentDefinition>) : {};
      this.processes = model.processes ? Object.entries(model.processes).reduce((acc, [key, m]) => { acc[key] = new ProcessDefinition(m); return acc; }, {} as Record<string, ProcessDefinition>) : {};
    }
  }

  /**
   * Gets/sets a list containing the secrets, if any, used to securely configure components
   */
  secrets?: string[];

  /**
   * Gets/sets a name/definition mapping, if any, of reusable authentication policies
   */
  @Type(() => AuthenticationPolicyDefinition)
  authentications?: Record<string, AuthenticationPolicyDefinition>;

  /**
   * Gets/sets a name/definition mapping, if any, of reusable toolsets
   */
  @Type(() => ToolsetDefinition)
  toolsets?: Record<string, ToolsetDefinition>;

  /**
   * Gets/sets a name/definition mapping, if any, of reusable functions
   */
  @Type(() => KernelFunctionDefinition)
  functions?: Record<string, KernelFunctionDefinition>;

  /**
   * Gets/sets a name/definition mapping, if any, of reusable kernels
   */
  @Type(() => KernelDefinition)
  kernels?: Record<string, KernelDefinition>;

  /**
   * Gets/sets a name/definition mapping, if any, of reusable memories
   */
  @Type(() => MemoryDefinition)
  memories?: Record<string, MemoryDefinition>;

  /**
   * Gets/sets a name/definition mapping, if any, of reusable agents
   */
  @Type(() => AgentDefinition)
  agents?: Record<string, AgentDefinition>;

  /**
   * Gets/sets a name/definition mapping, if any, of reusable agentic processes
   */
  @Type(() => ProcessDefinition)
  processes?: Record<string, ProcessDefinition>;
}