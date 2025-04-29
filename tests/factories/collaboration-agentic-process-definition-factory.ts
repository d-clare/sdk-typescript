import { CollaborationAgenticProcessDefinition, CollaborationStrategyDefinition, SelectionStrategyDefinition, TerminationStrategyDefinition } from "../../src";
import { AgentDefinitionFactory } from "./agent-definition-factory";
import { KernelDefinitionFactory } from "./kernel-definition-factory";
import { KernelFunctionDefinitionFactory } from "./kernel-function-definition-factory";

export class CollaborationAgenticProcessDefinitionFactory {
  static create(): CollaborationAgenticProcessDefinition {
    return new CollaborationAgenticProcessDefinition({
      agents: {
        hostedAgent: AgentDefinitionFactory.createHosted(),
        remoteAgent: AgentDefinitionFactory.createRemote(),
      },
      strategy: new CollaborationStrategyDefinition({
        selection: new SelectionStrategyDefinition({
          agentsVariableName: 'agents',
          historyVariableName: 'history',
          initialAgent: 'hostedAgent',
          function: KernelFunctionDefinitionFactory.create(),
          kernel: KernelDefinitionFactory.create(),
        }),
        termination: new TerminationStrategyDefinition({
          agents: [ 'hostedAgent', 'remoteAgent' ],
          agentVariableName: 'agents',
          historyVariableName: 'history',
          maximumIterations: 42,
          function: KernelFunctionDefinitionFactory.create(),
          kernel: KernelDefinitionFactory.create(),
        })
      })
    });
  }
}