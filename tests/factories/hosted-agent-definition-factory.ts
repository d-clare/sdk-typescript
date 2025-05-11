import { HostedAgentDefinition, KnowledgeDefinition } from '../../src';
import { AgentSkillDefinitionFactory } from './agent-skill-definition-factory';
import { KnowledgeGraphDefinitionFactory } from './knowledge-graph-definition-factory';
import { LlmDefinitionFactory } from './llm-definition-factory';
import { MemoryDefinitionFactory } from './memory-definition-factory';
import { ToolsetDefinitionFactory } from './toolset-definition-factory';
import { VectorCollectionDefinitionFactory } from './vector-collection-definition-factory';

export class HostedAgentDefinitionFactory {
  static create(): HostedAgentDefinition {
    return new HostedAgentDefinition({
      description: 'fake description',
      instructions: 'fake instructions',
      skills: AgentSkillDefinitionFactory.createCollection(),
      memory: MemoryDefinitionFactory.create(),
      knowledge: new KnowledgeDefinition({
        vectors: VectorCollectionDefinitionFactory.createCollection(),
        graphs: KnowledgeGraphDefinitionFactory.createCollection(),
      }),
      llm: LlmDefinitionFactory.create(),
      toolsets: ToolsetDefinitionFactory.createCollection(),
    });
  }
}
