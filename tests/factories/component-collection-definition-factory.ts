import { ComponentCollectionDefinition } from "../../src";
import { AgentDefinitionFactory } from "./agent-definition-factory";
import { AuthenticationPolicyDefinitionFactory } from "./authentication-policy-definition-factory";
import { KernelDefinitionFactory } from "./kernel-definition-factory";
import { KernelFunctionDefinitionFactory } from "./kernel-function-definition-factory";
import { MemoryDefinitionFactory } from "./memory-definition-factory";
import { ProcessDefinitionFactory } from "./process-definition-factory";
import { ToolsetDefinitionFactory } from "./toolset-definition-factory";

export class ComponentCollectionDefinitionFactory {
  static create(): ComponentCollectionDefinition {
    return new ComponentCollectionDefinition({
      agents: AgentDefinitionFactory.createCollection(),
      authentications: AuthenticationPolicyDefinitionFactory.createCollection(),
      functions: {
        'fake-function': KernelFunctionDefinitionFactory.create()
      },
      kernels: {
        'fake-kernel': KernelDefinitionFactory.create()
      },
      memories: MemoryDefinitionFactory.createCollection(),
      processes: ProcessDefinitionFactory.createCollection(),
      toolsets: ToolsetDefinitionFactory.createCollection(),
    });
  }
}