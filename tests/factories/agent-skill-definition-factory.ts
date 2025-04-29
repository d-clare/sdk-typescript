import { AgentSkillDefinition } from "../../src";

export const defaultAgentSkillDefinition = {
  name: 'fake-skill-name',
  description: 'fake-skill-description'
}

export class AgentSkillDefinitionFactory {
  static create(name?: string, description?: string): AgentSkillDefinition {
    return new AgentSkillDefinition({
      name: name || defaultAgentSkillDefinition.name,
      description: description || defaultAgentSkillDefinition.description
    });
  }

  static createCollection(length: number = 3): AgentSkillDefinition[] {
    return Array(length).fill('').map((_,i) => 
      AgentSkillDefinitionFactory.create(
        `${defaultAgentSkillDefinition.name}-${i}`,
        `${defaultAgentSkillDefinition.description}-${i}`
      )
    );
  }
}