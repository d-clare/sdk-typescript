import { describe, expect, it } from 'vitest';
import { AgentDefinition, EndpointDefinition, Serialization, ToolsetDefinition, WorkflowDefinition } from '../../src';
import { defaultEndpointUri, EndpointDefinitionFactory } from './endpoint-definition-factory';
import { AgentDefinitionFactory } from './agent-definition-factory';
import { WorkflowDefinitionFactory } from './workflow-definition-factory';
import { Hydrator } from '../../src/hydrator';

export const serializationTest = (language: string) => {
  const serializer: (obj: unknown) => string = Serialization[`to${language}`];
  const deserializer: <T>(cls: new (...args: unknown[]) => T, jsonString: string) => T =
    Serialization[`from${language}`];

  describe(`${language} (de)serialization`, () => {
    it(`should (de)serialize ToolsetDefinition (OpenAPI) using ${language}`, () => {
      const sourceOjb = new ToolsetDefinition({
        openApi: {
          document: {
            name: 'fake-document',
            endpoint: {
              uri: 'https://fake-endpoint.com',
            },
          },
        },
      });

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(ToolsetDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });

    it(`should (de)serialize ToolsetDefinition (MCP) using ${language}`, () => {
      const sourceOjb = new ToolsetDefinition({
        mcp: {
          client: {
            protocolVersion: '2024-11-05',
            implementation: {
              name: 'fake-mcp-client-implementation',
              version: 'fake-mcp-client-version',
            },
          },
          transport: {
            http: {
              endpoint: {
                uri: defaultEndpointUri,
              },
              headers: {
                'Fake-Header-Name': 'Fake-Header-Value',
              },
            },
          },
        },
      });

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(ToolsetDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });

    it(`should (de)serialize hosted agent definition using ${language}`, () => {
      const sourceObj = AgentDefinitionFactory.createHosted();

      const serialized = serializer(sourceObj);
      const deserialized = deserializer(AgentDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceObj);
    });

    it(`should (de)serialize remote agent definition using ${language}`, () => {
      const sourceObj = AgentDefinitionFactory.createRemote();

      const serialized = serializer(sourceObj);
      const deserialized = deserializer(AgentDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceObj);
    });

    it(`should (de)serialize workflow definition using ${language}`, () => {
      const sourceObj = WorkflowDefinitionFactory.create();

      const serialized = serializer(sourceObj);
      const deserialized = deserializer(WorkflowDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceObj);
    });
  });
};
