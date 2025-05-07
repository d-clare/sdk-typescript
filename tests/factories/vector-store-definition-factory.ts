import { VectorStoreDefinition, VectorStoreProvider, VectorStoreProviderDefinition } from "../../src";

export class VectorStoreDefinitionFactory {
  static create(): VectorStoreDefinition {
    return new VectorStoreDefinition({
      provider: new VectorStoreProviderDefinition({
        name: VectorStoreProvider.Faiss,
        configuration: [],
      }),
    });
  }
}