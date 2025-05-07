import { FunctionDefinition } from "../../src";
import { LlmDefinitionFactory } from "./llm-definition-factory";
import { PromptTemplateDefinitionFactory } from "./prompt-template-definition-factory";

export class FunctionDefinitionFactory {
  static create(): FunctionDefinition {
    return new FunctionDefinition({
      prompt: PromptTemplateDefinitionFactory.create(),
      llm: LlmDefinitionFactory.create(),
    });
  }
}