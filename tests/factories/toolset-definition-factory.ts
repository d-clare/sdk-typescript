import {
  ExternalResourceDefinition,
  McpClientDefinition,
  McpClientImplementationDefinition,
  McpProtocolVersion,
  McpToolsetDefinition,
  OpenApiToolsetDefinition,
  ToolsetDefinition,
} from '../../src';
import { EndpointDefinitionFactory } from './endpoint-definition-factory';
import { McpTransportDefinitionFactory } from './mcp-transport-definition-factory';

export class ToolsetDefinitionFactory {
  static createMcp(): ToolsetDefinition {
    return new ToolsetDefinition({
      mcp: new McpToolsetDefinition({
        client: new McpClientDefinition({
          protocolVersion: McpProtocolVersion.v20241105,
          implementation: new McpClientImplementationDefinition({
            name: 'fake-mcp-client-implementation',
            version: 'fake-mcp-client-version',
          }),
        }),
        transport: McpTransportDefinitionFactory.createHttp(),
      }),
    });
  }

  static createOpenApi(): ToolsetDefinition {
    return new ToolsetDefinition({
      openApi: new OpenApiToolsetDefinition({
        document: new ExternalResourceDefinition({
          name: 'fake-document',
          endpoint: EndpointDefinitionFactory.create(),
        }),
      }),
    });
  }

  static createCollection(): Record<string, ToolsetDefinition> {
    return {
      mcp: this.createMcp(),
      openApi: this.createOpenApi(),
    };
  }
}
