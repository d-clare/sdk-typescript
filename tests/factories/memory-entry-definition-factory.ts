import { MemoryEntryDefinition, MemoryEntryMetadata } from '../../src';

export class MemoryEntryDefinitionFactory {
  static create(): MemoryEntryDefinition {
    return new MemoryEntryDefinition({
      content: `fake-content-${crypto.randomUUID()}`,
      metadata: new MemoryEntryMetadata({
        topic: `fake-topic-${crypto.randomUUID()}`,
        category: `fake-category-${crypto.randomUUID()}`,
        locale: 'en-US',
        properties: {
          'fake-property-1-key': 'fake-property-1-value',
          'fake-property-2-key': 'fake-property-2-value',
        },
      }),
    });
  }

  static createCollection(length: number = 3): MemoryEntryDefinition[] {
    return Array(length)
      .fill('')
      .map(() => this.create());
  }
}
