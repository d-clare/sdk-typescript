import {
  HostedAgentDefinition,
  KnowledgeDefinition,
} from '../../src';
import { AgentSkillDefinitionFactory } from './agent-skill-definition-factory';
import { EmbeddingModelDefinitionFactory } from './embedding-model-definition-factory';
import { KnowledgeGraphDefinitionFactory } from './knowledge-graph-definition-factory';
import { LlmDefinitionFactory } from './llm-definition-factory';
import { MemoryDefinitionFactory } from './memory-definition-factory';
import { ToolsetDefinitionFactory } from './toolset-definition-factory';
import { VectorStoreDefinitionFactory } from './vector-store-definition-factory';

export class HostedAgentDefinitionFactory {
  static create(): HostedAgentDefinition {
    return new HostedAgentDefinition({
      description: 'fake description',
      instructions: 'fake instructions',
      skills: AgentSkillDefinitionFactory.createCollection(),
      memory: MemoryDefinitionFactory.create(),
      knowledge: new KnowledgeDefinition({
        embedding: EmbeddingModelDefinitionFactory.create(),
        store: VectorStoreDefinitionFactory.create(),
        graph: KnowledgeGraphDefinitionFactory.create(),
      }),
      llm: LlmDefinitionFactory.create(),
      toolsets: ToolsetDefinitionFactory.createCollection(),
    });
  }
}
