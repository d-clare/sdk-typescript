/*
 * Copyright � 2025-Present The DClare Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


 //!\ This file has been generated, any modification will be lost /!\\


import { Hydrator } from '../hydrator';
import { ManifestMetadata } from './manifest-metadata';
import { ComponentCollectionDefinition } from './component-collection-definition';
import { InterfaceCollectionDefinition } from './interface-collection-definition';
import { Type } from 'class-transformer';

/**
 * Represents the definition of the application metadata, reusable components such as agents, kernels, and secrets, and specifies how these components are exposed through interfaces like A2A or HTTP. It acts as the central entry point for declaring and orchestrating agent behavior
 */
export class Manifest extends Hydrator<Manifest> {

  constructor(model?: Partial<Manifest>) {
    super(model);
    if (model) {
      if (model.metadata) this.metadata = new ManifestMetadata(model.metadata);
      if (model.components) this.components = new ComponentCollectionDefinition(model.components);
      if (model.interfaces) this.interfaces = new InterfaceCollectionDefinition(model.interfaces);
    }
  }

  /**
   * Gets/sets an object used to describe the manifest
   */
  @Type(() => ManifestMetadata)
  metadata: ManifestMetadata;

  /**
   * Gets/sets a collection of reusable components, if any, that can be referenced throughout the manifest
   */
  @Type(() => ComponentCollectionDefinition)
  components?: ComponentCollectionDefinition;

  /**
   * Gets/sets a collection of interfaces through which the application's components are made accessible
   */
  @Type(() => InterfaceCollectionDefinition)
  interfaces: InterfaceCollectionDefinition;
}