import { AgentCallDefinition, AskTaskDefinition, CallTaskDefinition, DoTaskDefinition, ForLoopDefinition, ForTaskDefinition, SetTaskDefinition } from "../../src";
import { FunctionDefinitionFactory } from "./function-definition-factory";

export class TaskDefinitionFactory {
  static createAsk(): AskTaskDefinition {
    return new AskTaskDefinition({
      ask: new AgentCallDefinition({
        agent: 'fake-agent',
        to: 'Fake ',
      }),
    });
  }

  static createCall(): CallTaskDefinition {
    return new CallTaskDefinition({
      call: FunctionDefinitionFactory.create(),
      with: {
        'fake-parameter-key-1': 'fake-parameter-value-1',
      }
    });
  }

  static createSet(): SetTaskDefinition {
    return new SetTaskDefinition({
      set: {
        'fake-parameter-key-1': 'fake-parameter-value-1',
      }
    });
  }

  static createDo(): DoTaskDefinition {
    return new DoTaskDefinition({
      sequentially:{ 
        'subtask-1': this.createAsk(),
        'subtask-2': this.createCall(),
        'subtask-3': this.createSet()
      }
    });
  }

  static createFor(): ForTaskDefinition {
    return new ForTaskDefinition({
      for: new ForLoopDefinition({
        each: 'fake-item',
        in: 'fake-items',
        at: 'fake-index',
      }),
      do: {
        'subtask-1': this.createAsk(),
        'subtask-2': this.createCall(),
        'subtask-3': this.createSet()
      }
    });
  }
}