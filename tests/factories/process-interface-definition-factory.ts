import { HttpInterfaceDefinition, InterfaceEndpointCollectionDefinition, OauthFlowCollectionDefinition, OAuthFlowDefinition, ProcessInterfaceDefinition, SecurityScheme, SecuritySchemeDefinition } from "../../src";
import { CollaborationAgenticProcessDefinitionFactory } from "./collaboration-agentic-process-definition-factory";
import { ConvergenceAgenticProcessDefinitionFactory } from "./convergence-agentic-process-definition-factory";

export class ProcessInterfaceDefinitionFactory {
  static createCollaboration(): ProcessInterfaceDefinition {
    return new ProcessInterfaceDefinition({
      collaboration: CollaborationAgenticProcessDefinitionFactory.create(),
      endpoints: new InterfaceEndpointCollectionDefinition({
        a2A: false,
        http: new HttpInterfaceDefinition({
          path: '/fake-path',
          authentication: new SecuritySchemeDefinition({
            type: SecurityScheme.OAuth2,
            description: 'Fake OAuth2 security scheme',
            flows: new OauthFlowCollectionDefinition({
              clientCredentials: new OAuthFlowDefinition({
                tokenUrl: "https://fake.com/oauth2/token"
              })
            })
          })
        })
      })
    });
  }

  static createConvergence(): ProcessInterfaceDefinition {
    return new ProcessInterfaceDefinition({
      convergence: ConvergenceAgenticProcessDefinitionFactory.create(),
      endpoints: new InterfaceEndpointCollectionDefinition({
        a2A: false,
        http: new HttpInterfaceDefinition({
          path: '/fake-path',
          authentication: new SecuritySchemeDefinition({
            type: SecurityScheme.OAuth2,
            description: 'Fake OAuth2 security scheme',
            flows: new OauthFlowCollectionDefinition({
              clientCredentials: new OAuthFlowDefinition({
                tokenUrl: "https://fake.com/oauth2/token"
              })
            })
          })
        })
      })
    });
  }

  static createCollection(): Record<string, ProcessInterfaceDefinition> {
    return {
      collaboration: this.createCollaboration(),
      convergence: this.createConvergence()
    }
  }
}