import { A2AChannelConfiguration, AgentCommunicationChannelDefinition, AgentInterfaceDefinition, AgentMemoryCapabilityDefinition, AgentMemoryFormatOptions, AgentMemoryInjectionStrategyDefinition, AgentMemorySearchDefinition, AuthenticationParameterPlacementLocation, DClareDefaults, HostedAgentDefinition, HttpInterfaceDefinition, InterfaceEndpointCollectionDefinition, MemoryInjectionPosition, RemoteAgentDefinition, SecurityScheme, SecuritySchemeDefinition } from "../../src";
import { AgentSkillDefinitionFactory } from "./agent-skill-definition-factory";
import { EndpointDefinitionFactory } from "./endpoint-definition-factory";
import { HostedAgentDefinitionFactory } from "./hosted-agent-definition-factory";
import { KernelDefinitionFactory } from "./kernel-definition-factory";
import { MemoryDefinitionFactory } from "./memory-definition-factory";

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
            in: AuthenticationParameterPlacementLocation.Header
          })
        })
      }),
      hosted: HostedAgentDefinitionFactory.create()
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
            in: AuthenticationParameterPlacementLocation.Header
          })
        })
      }),
      remote: new RemoteAgentDefinition({
        channel: new AgentCommunicationChannelDefinition({
          a2A: new A2AChannelConfiguration({
            endpoint: EndpointDefinitionFactory.create()
          })
        })
      })
    });
  }

  static createCollection(): Record<string, AgentInterfaceDefinition> {
    return {
      hosted: this.createHosted(),
      remote: this.createRemote(),
    }
  }
}