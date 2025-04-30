import { ProcessDefinition } from '../../src';
import { CollaborationAgenticProcessDefinitionFactory } from './collaboration-agentic-process-definition-factory';
import { ConvergenceAgenticProcessDefinitionFactory } from './convergence-agentic-process-definition-factory';

export class ProcessDefinitionFactory {
  static createCollaboration(): ProcessDefinition {
    return new ProcessDefinition({
      collaboration: CollaborationAgenticProcessDefinitionFactory.create(),
    });
  }

  static createConvergence(): ProcessDefinition {
    return new ProcessDefinition({
      convergence: ConvergenceAgenticProcessDefinitionFactory.create(),
    });
  }

  static createCollection(): Record<string, ProcessDefinition> {
    return {
      collaboration: this.createCollaboration(),
      convergence: this.createConvergence(),
    };
  }
}
