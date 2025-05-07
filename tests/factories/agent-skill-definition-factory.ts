import { AgentSkillDefinition } from '../../src';

export const defaultAgentSkillDefinition = {
  name: 'fake-skill-name',
  description: 'fake-skill-description',
};

export class AgentSkillDefinitionFactory {
  static create(description?: string): AgentSkillDefinition {
    return new AgentSkillDefinition({
      description: description || defaultAgentSkillDefinition.description,
    });
  }

  static createCollection(length: number = 3): Record<string, AgentSkillDefinition> {
    return Object.fromEntries(
      Array(length)
        .fill('')
        .map((_, i) => [
            `${defaultAgentSkillDefinition.name}-${i}`,
            AgentSkillDefinitionFactory.create(`${defaultAgentSkillDefinition.description}-${i}`)
          ]
        )
    );
  }
}
