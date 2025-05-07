import { PromptTemplateDefinition, PromptTemplateFormat } from "../../src";
import { InputVariableDefinitionFactory } from "./input-variable-definition-factory";

export class PromptTemplateDefinitionFactory {
  static create(): PromptTemplateDefinition {
    return new PromptTemplateDefinition({
      content: "Fake prompt template",
      format: PromptTemplateFormat.Liquid,
      inputVariables: [InputVariableDefinitionFactory.create()],
      outputVariable: InputVariableDefinitionFactory.create(),
    });
  }
}