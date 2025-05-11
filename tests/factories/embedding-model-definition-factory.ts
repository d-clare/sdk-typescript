import {
  EmbeddingApiDefinition,
  EmbeddingModelDefinition,
  EmbeddingModelProvider,
  EmbeddingModelProviderDefinition,
} from '../../src';
import { EndpointDefinitionFactory } from './endpoint-definition-factory';

export class EmbeddingModelDefinitionFactory {
  static create(): EmbeddingModelDefinition {
    return new EmbeddingModelDefinition({
      provider: new EmbeddingModelProviderDefinition({
        name: EmbeddingModelProvider.Gemini,
        configuration: [],
      }),
      model: 'gemini-embedding-exp-03-07',
      dimensions: 3072,
      api: new EmbeddingApiDefinition({
        endpoint: EndpointDefinitionFactory.create(),
      }),
    });
  }
}
