import { KernelFunctionDefinition, PromptTemplateDefinition } from "../../src";
import { InputVariableDefinitionFactory } from "./input-variable-definition-factory";
import { OutputVariableDefinitionFactory } from "./output-variable-definition-factory";

export class KernelFunctionDefinitionFactory {
  static create(): KernelFunctionDefinition {
    return new KernelFunctionDefinition({
      template: new PromptTemplateDefinition({
        content: 'fake-template-content',
        format: 'fake-format',
        inputVariables: [InputVariableDefinitionFactory.create()],
        outputVariable: OutputVariableDefinitionFactory.create()
      })
    });
  }
}