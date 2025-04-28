import 'reflect-metadata';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import YAML from 'yaml';

/**
 * A utility class to handle serialization and deserialization of objects
 * to and from JSON and YAML formats using class-transformer.
 */
export class Serialization {
  
  /**
   * Converts an object to a JSON string.
   * 
   * @param obj The object to serialize.
   * @returns The serialized JSON string.
   * 
   * @example
   * const userJson = Serialization.toJSON(user);
   */
  static toJSON(obj: any): string {
    const plain = instanceToPlain(obj);
    return JSON.stringify(plain, null, 2);
  }

  /**
   * Converts an object to a YAML string.
   * 
   * @param obj The object to serialize.
   * @returns The serialized YAML string.
   * 
   * @example
   * const userYaml = Serialization.toYAML(user);
   */
  static toYAML(obj: any): string {
    const plain = instanceToPlain(obj);
    return YAML.stringify(plain);
  }

  /**
   * Deserializes a JSON string into an instance of the provided class.
   * 
   * @param cls The class to instantiate.
   * @param jsonString The JSON string to deserialize.
   * @returns An instance of the provided class populated with data from the JSON string.
   * 
   * @example
   * const user = Serialization.fromJSON(User, jsonString);
   */
  static fromJSON<T>(cls: new (...args: any[]) => T, jsonString: string): T {
    const plain = JSON.parse(jsonString);
    return plainToInstance(cls, plain);
  }

  /**
   * Deserializes a YAML string into an instance of the provided class.
   * 
   * @param cls The class to instantiate.
   * @param yamlString The YAML string to deserialize.
   * @returns An instance of the provided class populated with data from the YAML string.
   * 
   * @example
   * const user = Serialization.fromYAML(User, yamlString);
   */
  static fromYAML<T>(cls: new (...args: any[]) => T, yamlString: string): T {
    const plain = YAML.parse(yamlString);
    return plainToInstance(cls, plain);
  }
}