import { A2ACommunicationChannelDefinition, AgentCommunicationChannelDefinition } from '../../src';
import { EndpointDefinitionFactory } from './endpoint-definition-factory';

export class AgentCommunicationChannelDefinitionFactory {
  static createA2A(): AgentCommunicationChannelDefinition {
    return new AgentCommunicationChannelDefinition({
      a2A: new A2ACommunicationChannelDefinition({
        name: 'fake-agent',
        endpoint: EndpointDefinitionFactory.create(),
      }),
    });
  }
}
