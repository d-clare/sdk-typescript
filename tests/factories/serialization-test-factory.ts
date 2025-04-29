import { describe, it, expect } from 'vitest';
import { 
  A2AChannelConfiguration,
  AgentDefinition,
  AgentInterfaceDefinition,
  AgentSkillDefinition,
  AuthenticationPolicyDefinition,
  CollaborationAgenticProcessDefinition,
  ComponentCollectionDefinition,
  ConvergenceAgenticProcessDefinition,
  Duration,
  EndpointDefinition,
  FileMemoryDefinition,
  HostedAgentDefinition,
  KernelDefinition,
  KeyValueMemoryDefinition,
  Manifest,
  ManifestMetadata,
  McpToolsetDefinition,
  McpTransportDefinition,
  OpenApiToolsetDefinition,
  ProcessDefinition,
  ProcessInterfaceDefinition,
  RemoteAgentDefinition,
  Serialization,
  StaticMemoryDefinition,
  ToolsetDefinition,
  VectorMemoryDefinition
} from '../../src';
import { AgentDefinitionFactory } from './agent-definition-factory';
import { AgentSkillDefinitionFactory } from './agent-skill-definition-factory';
import { defaultEndpointUri, EndpointDefinitionFactory } from './endpoint-definition-factory';
import { AgentInterfaceDefinitionFactory } from './agent-interface-definition-factory';
import { AuthenticationPolicyDefinitionFactory } from './authentication-policy-definition-factory';
import { CollaborationAgenticProcessDefinitionFactory } from './collaboration-agentic-process-definition-factory';
import { ComponentCollectionDefinitionFactory } from './component-collection-definition-factory';
import { ConvergenceAgenticProcessDefinitionFactory } from './convergence-agentic-process-definition-factory';
import { MemoryDefinitionFactory } from './memory-definition-factory';
import { KernelDefinitionFactory } from './kernel-definition-factory';
import { ManifestMetadataFactory } from './manifest-metadata-factory';
import { InterfaceCollectionDefinitionFactory } from './interface-collection-definition-factory';
import { ToolsetDefinitionFactory } from './toolset-definition-factory';
import { ProcessDefinitionFactory } from './process-definition-factory';
import { ProcessInterfaceDefinitionFactory } from './process-interface-definition-factory';

export const serializationTest = (language: string) => {
  const serializer: (obj: any) => string = Serialization[`to${language}`];
  const deserializer: <T>(cls: new (...args: any[]) => T, jsonString: string) => T = Serialization[`from${language}`];

  describe(`${language} (de)serialization`, () => {
    it(`should (de)serialize ToolsetDefinition (OpenAPI) using ${language}`, () => {
      const sourceOjb = new ToolsetDefinition({
        openApi: {
          document: {
            name: "fake-document",
            endpoint: {
              uri: "https://fake-endpoint.com"
            }
          }
        }
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
            protocolVersion: "2024-11-05",
            implementation: {
              name: 'fake-mcp-client-implementation',
              version: "fake-mcp-client-version"
            }
          },
          transport: {
            http: {
              endpoint: {
                uri: defaultEndpointUri
              },
              headers: {
                "Fake-Header-Name": "Fake-Header-Value"
              } 
            }
          }
        }
      });

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(ToolsetDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });

    it(`should (de)serialize A2AChannelConfiguration using ${language}`, () => {
      const endpointUri = 'http://test.com';
      const sourceOjb = new A2AChannelConfiguration({
        endpoint: EndpointDefinitionFactory.create(endpointUri)
      });

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(A2AChannelConfiguration, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
      expect(deserialized.endpoint.uri).toEqual(endpointUri);
    });
    
    it(`should (de)serialize AgentDefinition (remote) using ${language}`, () => {
      const sourceOjb = AgentDefinitionFactory.createRemote();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(AgentDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize AgentSkillDefinition using ${language}`, () => {
      const sourceOjb = AgentSkillDefinitionFactory.create();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(AgentSkillDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize AgentInterfaceDefinition using ${language}`, () => {
      const sourceOjb = AgentInterfaceDefinitionFactory.createHosted();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(AgentInterfaceDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize AuthenticationPolicyDefinition using ${language}`, () => {
      const sourceOjb = AuthenticationPolicyDefinitionFactory.createBearer();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(AuthenticationPolicyDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize CollaborationAgenticProcessDefinition using ${language}`, () => {
      const sourceOjb = CollaborationAgenticProcessDefinitionFactory.create();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(CollaborationAgenticProcessDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize ComponentCollectionDefinition using ${language}`, () => {
      const sourceOjb = ComponentCollectionDefinitionFactory.create();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(ComponentCollectionDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize ConvergenceAgenticProcessDefinition using ${language}`, () => {
      const sourceOjb = ConvergenceAgenticProcessDefinitionFactory.create();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(ConvergenceAgenticProcessDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize Duration using ${language}`, () => {
      const sourceOjb = {};// Duration.fromHours(42); // TODO

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(Duration, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize EndpointDefinition using ${language}`, () => {
      const sourceOjb = EndpointDefinitionFactory.create();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(EndpointDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize FileMemoryDefinition using ${language}`, () => {
      const sourceOjb = MemoryDefinitionFactory.createFile();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(FileMemoryDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize HostedAgentDefinition using ${language}`, () => {
      const sourceOjb = AgentDefinitionFactory.createHosted();

      const serialized = serializer(sourceOjb.hosted);
      const deserialized = deserializer(HostedAgentDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb.hosted);
    });
    
    it(`should (de)serialize KernelDefinition using ${language}`, () => {
      const sourceOjb = KernelDefinitionFactory.create();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(KernelDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize KeyValueMemoryDefinition using ${language}`, () => {
      const sourceOjb = MemoryDefinitionFactory.createKeyValue();

      const serialized = serializer(sourceOjb.keyValue);
      const deserialized = deserializer(KeyValueMemoryDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb.keyValue);
    });
    
    it(`should (de)serialize KeyValueMemoryDefinition using ${language}`, () => {
      const sourceOjb = new Manifest({
        metadata: ManifestMetadataFactory.create(),
        components: ComponentCollectionDefinitionFactory.create(),
        interfaces: InterfaceCollectionDefinitionFactory.create()
      });

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(Manifest, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize ManifestMetadata using ${language}`, () => {
      const sourceOjb = ManifestMetadataFactory.create();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(ManifestMetadata, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize McpToolsetDefinition using ${language}`, () => {
      const sourceOjb = ToolsetDefinitionFactory.createMcp();

      const serialized = serializer(sourceOjb.mcp);
      const deserialized = deserializer(McpToolsetDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb.mcp);
    });
    
    it(`should (de)serialize OpenApiToolsetDefinition using ${language}`, () => {
      const sourceOjb = ToolsetDefinitionFactory.createOpenApi();

      const serialized = serializer(sourceOjb.openApi);
      const deserialized = deserializer(OpenApiToolsetDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb.openApi);
    });
    
    it(`should (de)serialize ProcessDefinition using ${language}`, () => {
      const sourceOjb = ProcessDefinitionFactory.createConvergence();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(ProcessDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize ProcessInterfaceDefinition using ${language}`, () => {
      const sourceOjb = ProcessInterfaceDefinitionFactory.createCollaboration();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(ProcessInterfaceDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize RemoteAgentDefinition using ${language}`, () => {
      const sourceOjb = AgentDefinitionFactory.createRemote();

      const serialized = serializer(sourceOjb.remote);
      const deserialized = deserializer(RemoteAgentDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb.remote);
    });
    
    it(`should (de)serialize StaticMemoryDefinition using ${language}`, () => {
      const sourceOjb = MemoryDefinitionFactory.createStatic();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(StaticMemoryDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
    
    it(`should (de)serialize VectorMemoryDefinition using ${language}`, () => {
      const sourceOjb = MemoryDefinitionFactory.createVector();

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(VectorMemoryDefinition, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
  });
};