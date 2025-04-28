import { serializationTest } from './factories/serialization-test-factory';

/**
 * Run the serialization tests for JSON.
 */
serializationTest('JSON');

/**
 * Run the serialization tests for YAML.
 */
serializationTest('YAML');