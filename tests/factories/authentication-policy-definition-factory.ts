import {
  ApiKeyAuthenticationSchemeDefinition,
  AuthenticationParameterPlacementDefinition,
  AuthenticationParameterPlacementLocation,
  AuthenticationPolicyDefinition,
  BearerAuthenticationSchemeDefinition,
  OAuth2AuthenticationClientDefinition,
  OAuth2AuthenticationEndpointsDefinition,
  OAuth2AuthenticationSchemeDefinition,
  OAuth2GrantType,
  OpenIDConnectSchemeDefinition,
} from '../../src';

export class AuthenticationPolicyDefinitionFactory {
  static createApiKey(): AuthenticationPolicyDefinition {
    return new AuthenticationPolicyDefinition({
      apiKey: new ApiKeyAuthenticationSchemeDefinition({
        key: 'fake-api-key',
        placement: new AuthenticationParameterPlacementDefinition({
          in: AuthenticationParameterPlacementLocation.Header,
          name: 'Api-Key',
        }),
      }),
    });
  }

  static createBearer(): AuthenticationPolicyDefinition {
    return new AuthenticationPolicyDefinition({
      bearer: new BearerAuthenticationSchemeDefinition({
        token: 'fake-bearer-token',
      }),
    });
  }

  static createOAuth2(): AuthenticationPolicyDefinition {
    return new AuthenticationPolicyDefinition({
      oAuth2: new OAuth2AuthenticationSchemeDefinition({
        authority: 'https://fake-authority.com',
        grant: OAuth2GrantType.ClientCredentials,
        client: new OAuth2AuthenticationClientDefinition({
          id: 'fake-client-id',
          secret: 'fake-client-secret',
        }),
        endpoints: new OAuth2AuthenticationEndpointsDefinition({
          token: '/token',
        }),
      }),
    });
  }

  static createOIDC(): AuthenticationPolicyDefinition {
    return new AuthenticationPolicyDefinition({
      oidc: new OpenIDConnectSchemeDefinition({
        authority: 'https://fake-authority.com',
        grant: OAuth2GrantType.ClientCredentials,
        client: new OAuth2AuthenticationClientDefinition({
          id: 'fake-client-id',
          secret: 'fake-client-secret',
        }),
      }),
    });
  }

  static createCollection(): Record<string, AuthenticationPolicyDefinition> {
    return {
      apiKey: this.createApiKey(),
      bearer: this.createBearer(),
      oauth2: this.createOAuth2(),
      oidc: this.createOIDC(),
    };
  }
}
