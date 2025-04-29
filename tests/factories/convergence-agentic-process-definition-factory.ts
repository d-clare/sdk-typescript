import { ConvergenceAgenticProcessDefinition, ConvergenceStrategyDefinition, DecompositionStrategyDefinition, SynthesisStrategyDefinition } from "../../src";
import { AgentDefinitionFactory } from "./agent-definition-factory";
import { KernelDefinitionFactory } from "./kernel-definition-factory";
import { KernelFunctionDefinitionFactory } from "./kernel-function-definition-factory";

export class ConvergenceAgenticProcessDefinitionFactory {
  static create(): ConvergenceAgenticProcessDefinition {
    return new ConvergenceAgenticProcessDefinition({
      agents: {
        hostedAgent: AgentDefinitionFactory.createHosted(),
        remoteAgent: AgentDefinitionFactory.createRemote(),
      },
      strategy: new ConvergenceStrategyDefinition({
        decomposition: new DecompositionStrategyDefinition({
          agentsVariableName: 'agents',
          promptVariableName: 'prompt',
          function: KernelFunctionDefinitionFactory.create(),
          kernel: KernelDefinitionFactory.create(),
        }),
        synthesis: new SynthesisStrategyDefinition({
          inputsVariableName: 'responses',
          function: KernelFunctionDefinitionFactory.create(),
          kernel: KernelDefinitionFactory.create(),
        })
      })
    });
  }
}