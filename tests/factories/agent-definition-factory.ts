import {
  A2AChannelConfiguration,
  AgentCommunicationChannelDefinition,
  AgentDefinition,
  RemoteAgentDefinition,
} from '../../src';
import { EndpointDefinitionFactory } from './endpoint-definition-factory';
import { HostedAgentDefinitionFactory } from './hosted-agent-definition-factory';

export class AgentDefinitionFactory {
  static createRemote(): AgentDefinition {
    return new AgentDefinition({
      remote: new RemoteAgentDefinition({
        channel: new AgentCommunicationChannelDefinition({
          a2A: new A2AChannelConfiguration({
            endpoint: EndpointDefinitionFactory.create(),
          }),
        }),
      }),
    });
  }

  static createHosted(): AgentDefinition {
    return new AgentDefinition({
      hosted: HostedAgentDefinitionFactory.create(),
    });
  }

  static createCollection(): Record<string, AgentDefinition> {
    return {
      hosted: this.createHosted(),
      remote: this.createRemote(),
    };
  }
}
