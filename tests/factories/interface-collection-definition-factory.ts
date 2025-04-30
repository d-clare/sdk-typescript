import { InterfaceCollectionDefinition } from '../../src';
import { AgentInterfaceDefinitionFactory } from './agent-interface-definition-factory';

export class InterfaceCollectionDefinitionFactory {
  static create(): InterfaceCollectionDefinition {
    return new InterfaceCollectionDefinition({
      agents: AgentInterfaceDefinitionFactory.createCollection(),
    });
  }
}
