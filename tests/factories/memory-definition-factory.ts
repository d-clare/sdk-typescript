import { FileMemoryDefinition, KeyValueMemoryDefinition, KeyValueMemoryProvider, MemoryDefinition, StaticMemoryDefinition, VectorMemoryDefinition, VectorMemoryProvider } from '../../src';
import { MemoryEntryDefinitionFactory } from './memory-entry-definition-factory';

export class MemoryDefinitionFactory {
  static createFile(): MemoryDefinition {
    return new MemoryDefinition({
      file: new FileMemoryDefinition({
        path: '/fake/path',
        pattern: '*.*'
      })
    });
  }
  
  static createKeyValue(): MemoryDefinition {
    return new MemoryDefinition({
      keyValue: new KeyValueMemoryDefinition({
        provider: KeyValueMemoryProvider.Cache,
        configuration: {
           'fake-configuration-key-1': 'fake-configuration-value-1',
           'fake-configuration-key-2': 'fake-configuration-value-2',
        }
      })
    });
  }

  static createStatic(): MemoryDefinition {
    return new MemoryDefinition({
      static: new StaticMemoryDefinition({
        entries: MemoryEntryDefinitionFactory.createCollection()
      })
    });
  }

  static createVector(): MemoryDefinition {
    return new MemoryDefinition({
      vector: new VectorMemoryDefinition({
        provider: VectorMemoryProvider.Qdrant,
        configuration: {
          'fake-configuration-key-1': 'fake-configuration-value-1',
          'fake-configuration-key-2': 'fake-configuration-value-2',
          'fake-configuration-key-3': 'fake-configuration-value-3',
       }
      })
    });
  }

  static createCollection(): Record<string, MemoryDefinition> {
    return {
      file: this.createFile(),
      keyValue: this.createKeyValue(),
      static: this.createStatic(),
      vector: this.createVector()
    };
  }
}