import {
  A2AChannelConfiguration,
  AgentCommunicationChannelDefinition,
  AgentInterfaceDefinition,
  AuthenticationParameterPlacementLocation,
  HttpInterfaceDefinition,
  InterfaceEndpointCollectionDefinition,
  RemoteAgentDefinition,
  SecurityScheme,
  SecuritySchemeDefinition,
} from '../../src';
import { EndpointDefinitionFactory } from './endpoint-definition-factory';
import { HostedAgentDefinitionFactory } from './hosted-agent-definition-factory';

export class AgentInterfaceDefinitionFactory {
  static createHosted(): AgentInterfaceDefinition {
    return new AgentInterfaceDefinition({
      endpoints: new InterfaceEndpointCollectionDefinition({
        a2A: true,
        http: new HttpInterfaceDefinition({
          path: '/fake-path',
          authentication: new SecuritySchemeDefinition({
            type: SecurityScheme.ApiKey,
            description: 'Fake ApiKey authentication scheme',
            name: 'ApiKey',
            in: AuthenticationParameterPlacementLocation.Header,
          }),
        }),
      }),
      hosted: HostedAgentDefinitionFactory.create(),
    });
  }

  static createRemote(): AgentInterfaceDefinition {
    return new AgentInterfaceDefinition({
      endpoints: new InterfaceEndpointCollectionDefinition({
        a2A: true,
        http: new HttpInterfaceDefinition({
          path: '/fake-path',
          authentication: new SecuritySchemeDefinition({
            type: SecurityScheme.ApiKey,
            description: 'Fake ApiKey authentication scheme',
            name: 'ApiKey',
            in: AuthenticationParameterPlacementLocation.Header,
          }),
        }),
      }),
      remote: new RemoteAgentDefinition({
        channel: new AgentCommunicationChannelDefinition({
          a2A: new A2AChannelConfiguration({
            endpoint: EndpointDefinitionFactory.create(),
          }),
        }),
      }),
    });
  }

  static createCollection(): Record<string, AgentInterfaceDefinition> {
    return {
      hosted: this.createHosted(),
      remote: this.createRemote(),
    };
  }
}
