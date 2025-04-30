import { OutputVariableDefinition } from '../../src';
import { JsonSchemaFactory } from './json-schema-factory';

export class OutputVariableDefinitionFactory {
  static create(): OutputVariableDefinition {
    return new OutputVariableDefinition({
      description: 'fake-output-variable-description',
      schema: JsonSchemaFactory.create(),
    });
  }
}
