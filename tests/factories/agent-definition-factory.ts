import { AgentDefinition, RemoteAgentDefinition } from '../../src';
import { AgentCommunicationChannelDefinitionFactory } from './agent-communication-channel-definition-factory';
import { HostedAgentDefinitionFactory } from './hosted-agent-definition-factory';

export class AgentDefinitionFactory {
  static createRemote(): AgentDefinition {
    return new AgentDefinition({
      remote: new RemoteAgentDefinition({
        channel: AgentCommunicationChannelDefinitionFactory.createA2A(),
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
