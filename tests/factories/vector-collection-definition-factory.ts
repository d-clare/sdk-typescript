import { VectorCollectionDefinition } from '../../src';
import { EmbeddingModelDefinitionFactory } from './embedding-model-definition-factory';
import { VectorStoreDefinitionFactory } from './vector-store-definition-factory';

export class VectorCollectionDefinitionFactory {
  static create(): VectorCollectionDefinition {
    return new VectorCollectionDefinition({
      id: 'fake-collection',
      embedding: EmbeddingModelDefinitionFactory.create(),
      store: VectorStoreDefinitionFactory.create()
    });
  }

  static createCollection(): Record<string, VectorCollectionDefinition> {
    return {
      'fake-collection': this.create()
    };
  }
}
