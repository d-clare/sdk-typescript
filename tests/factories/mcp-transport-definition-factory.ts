import { McpHttpTransportDefinition, McpStdioTransportDefinition, McpTransportDefinition } from '../../src';
import { EndpointDefinitionFactory } from './endpoint-definition-factory';

export class McpTransportDefinitionFactory {
  static createHttp(): McpTransportDefinition {
    return new McpTransportDefinition({
      http: new McpHttpTransportDefinition({
        endpoint: EndpointDefinitionFactory.create(),
        headers: {
          'Fake-Header-Name': 'Fake-Header-Value',
        },
      }),
    });
  }

  static createStdio(): McpTransportDefinition {
    return new McpTransportDefinition({
      stdio: new McpStdioTransportDefinition({
        command: 'fake-command',
        arguments: ['fake-arg-1', 'fake-arg-2'],
      }),
    });
  }
}
