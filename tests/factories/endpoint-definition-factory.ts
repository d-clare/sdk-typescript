import { EndpointDefinition } from "../../src";

export const defaultEndpointUri = 'https://fake-endpoint.com';

export class EndpointDefinitionFactory {
  static create(uri?: string): EndpointDefinition {
    return new EndpointDefinition({
      uri: uri || defaultEndpointUri
    });
  }
}