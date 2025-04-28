import { describe, it, expect } from 'vitest';
import { A2AChannelConfiguration, EndpointDefinition, Serialization } from '../../src';

export const serializationTest = (language: string) => {
  const serializer: (obj: any) => string = Serialization[`to${language}`];
  const deserializer: <T>(cls: new (...args: any[]) => T, jsonString: string) => T = Serialization[`from${language}`];

  describe(`${language} (de)serialization`, () => {
    it('should (de)serialize A2AChannelConfiguration', () => {
      const sourceOjb = new A2AChannelConfiguration({
        endpoint: new EndpointDefinition({ uri: "https://test.com" })
      });

      const serialized = serializer(sourceOjb);
      const deserialized = deserializer(A2AChannelConfiguration, serialized);

      expect(deserialized).toBeDefined();
      expect(deserialized).toEqual(sourceOjb);
    });
  });
};