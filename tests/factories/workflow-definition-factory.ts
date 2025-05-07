import { WorkflowDefinition, WorkflowDefinitionMetadata } from "../../src";
import { TaskDefinitionFactory } from "./task-definition-factory";

export class WorkflowDefinitionFactory {
  static create(): WorkflowDefinition {
    return new WorkflowDefinition({
      metadata: new WorkflowDefinitionMetadata({
        name: 'fake-workflow',
        description: 'fake-description',
        version: '1.0.0',
        tags: ['tag1', 'tag2'],
      }),
      do: TaskDefinitionFactory.createDo().sequentially
    });
  }
}