import {
  MemoryDefinition,
  MemoryProviderDefinition,
  MemoryStrategy,
} from '../../src';
import { FunctionDefinitionFactory } from './function-definition-factory';

export class MemoryDefinitionFactory {
  static create(): MemoryDefinition {
    return new MemoryDefinition({
      provider: new MemoryProviderDefinition({
        name: 'fake-name',
        configuration: []
      }),
      strategy: MemoryStrategy.Summary,
      summarizer: FunctionDefinitionFactory.create(),
    });
  }
}
