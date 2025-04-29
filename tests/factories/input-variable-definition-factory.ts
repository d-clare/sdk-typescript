import { InputVariableDefinition } from "../../src";
import { JsonSchemaFactory } from "./json-schema-factory";

export class InputVariableDefinitionFactory {
  static create(): InputVariableDefinition {
    return new InputVariableDefinition({
      name: "fake-input-variable-name",
      description: "fake-input-variable-description",
      default: "fake-input-variable-description-default",
      required: true,
      sample: "fake-input-variable-sample",
      allowDangerousContent: true,
      schema: JsonSchemaFactory.create()
    });
  }
}