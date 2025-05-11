import { KnowledgeGraphDefinition, KnowledgeGraphProvider, KnowledgeGraphProviderDefinition } from '../../src';

export class KnowledgeGraphDefinitionFactory {
  static create(): KnowledgeGraphDefinition {
    return new KnowledgeGraphDefinition({
      provider: new KnowledgeGraphProviderDefinition({
        name: KnowledgeGraphProvider.Neo4j,
        configuration: [],
      }),
    });
  }

  static createCollection(): Record<string, KnowledgeGraphDefinition> {
    return {
      'fake-definition': this.create(),
    };
  }
}
