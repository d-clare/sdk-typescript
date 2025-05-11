import { LlmApiDefinition, LlmDefinition, LlmProvider, LlmProviderDefinition } from '../../src';
import { EndpointDefinitionFactory } from './endpoint-definition-factory';

export class LlmDefinitionFactory {
  static create(): LlmDefinition {
    return new LlmDefinition({
      provider: new LlmProviderDefinition({
        name: LlmProvider.OpenAI,
        configuration: [],
      }),
      model: 'gpt-4o',
      api: new LlmApiDefinition({
        endpoint: EndpointDefinitionFactory.create(),
      }),
    });
  }
}
