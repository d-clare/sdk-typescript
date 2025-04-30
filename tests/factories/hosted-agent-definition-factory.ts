import {
  AgentMemoryCapabilityDefinition,
  AgentMemoryEntryMetadataDefinition,
  AgentMemoryFormatOptions,
  AgentMemoryInjectionStrategyDefinition,
  AgentMemoryMetadataResolutionStrategyDefinition,
  AgentMemorySearchDefinition,
  AgentMemoryStoragePolicyDefinition,
  AgentMemorySynthetizationStrategyDefinition,
  DClareDefaults,
  HostedAgentDefinition,
  KernelFunctionStrategyDefinition,
  MemoryEntryMetadata,
  MemoryInjectionPosition,
} from '../../src';
import { AgentSkillDefinitionFactory } from './agent-skill-definition-factory';
import { KernelDefinitionFactory } from './kernel-definition-factory';
import { KernelFunctionDefinitionFactory } from './kernel-function-definition-factory';
import { MemoryDefinitionFactory } from './memory-definition-factory';

export class HostedAgentDefinitionFactory {
  static create(): HostedAgentDefinition {
    return new HostedAgentDefinition({
      extends: 'fake-reference',
      description: 'fake description',
      instructions: 'fake instructions',
      skills: AgentSkillDefinitionFactory.createCollection(),
      kernel: KernelDefinitionFactory.create(),
      memory: new AgentMemoryCapabilityDefinition({
        source: MemoryDefinitionFactory.createFile(),
        store: new AgentMemoryStoragePolicyDefinition({
          synthetization: new AgentMemorySynthetizationStrategyDefinition(
            new KernelFunctionStrategyDefinition({
              function: KernelFunctionDefinitionFactory.create(),
              kernel: KernelDefinitionFactory.create(),
            })
          ),
          metadata: new AgentMemoryEntryMetadataDefinition({
            resolution: new AgentMemoryMetadataResolutionStrategyDefinition({}),
            values: new MemoryEntryMetadata({
              topic: 'fake-topic',
              category: 'fake-category',
              tags: ['fake-tag1', 'fake-tag2'],
              locale: 'en-US',
              properties: {
                'fake-prop-key-1': 'fake-prop-value-1',
                'fake-prop-key-2': 'fake-prop-value-2',
              },
            }),
          }),
        }),
        inject: new AgentMemoryInjectionStrategyDefinition({
          format: new AgentMemoryFormatOptions({
            position: MemoryInjectionPosition.After,
            separator: DClareDefaults.MemoryEntrySeparator,
            template: 'fake-template',
          }),
          match: new AgentMemorySearchDefinition({
            keys: ['*.fake-key'],
            max: 10,
          }),
        }),
      }),
    });
  }
}
