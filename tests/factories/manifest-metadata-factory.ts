import { ManifestMetadata } from '../../src';

export class ManifestMetadataFactory {
  static create(): ManifestMetadata {
    return new ManifestMetadata({
      name: 'fake-manifest-name',
      description: 'fake-manifest-description',
      version: '1.0.0',
      tags: ['fake-tag-1', 'fake-tag-2', 'fake-tag-3'],
    });
  }
}
