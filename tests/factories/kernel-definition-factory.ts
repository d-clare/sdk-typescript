import {
  EmbeddingCapabilityDefinition,
  KernelDefinition,
  ReasoningCapabilityDefinition,
  ReasoningModelProvider,
  RuntimeCapabilityApiDefinition,
} from '../../src';
import { EndpointDefinitionFactory } from './endpoint-definition-factory';
import { ToolsetDefinitionFactory } from './toolset-definition-factory';

export class KernelDefinitionFactory {
  static create(): KernelDefinition {
    return new KernelDefinition({
      extends: 'fake-reference',
      reasoning: new ReasoningCapabilityDefinition({
        api: new RuntimeCapabilityApiDefinition({
          endpoint: EndpointDefinitionFactory.create(),
        }),
        model: 'fake-model',
        provider: ReasoningModelProvider.AzureOpenAI,
      }),
      embedding: new EmbeddingCapabilityDefinition({
        api: new RuntimeCapabilityApiDefinition({
          endpoint: EndpointDefinitionFactory.create(),
        }),
        model: 'fake-model',
        provider: ReasoningModelProvider.AzureOpenAI,
      }),
      toolsets: ToolsetDefinitionFactory.createCollection(),
    });
  }
}
