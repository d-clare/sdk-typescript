import { JSONSchema } from 'json-schema-typed';

export class JsonSchemaFactory {
  static create(): JSONSchema {
    return {
      type: 'object',
      properties: {
        'fake-property-1': {
          type: 'string',
        },
        'fake-property-2': {
          type: 'number',
        },
      },
    };
  }
}
