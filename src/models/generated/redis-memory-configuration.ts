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

import { Hydrator } from '../../hydrator';

/**
 * Represents the configuration of a Redis-based memory provider.
 */
export class RedisMemoryConfiguration extends Hydrator<RedisMemoryConfiguration> {
  constructor(model?: Partial<RedisMemoryConfiguration>) {
    super(model);
  }

  /**
   * Gets or sets the Redis server endpoint (e.g., localhost:6379).
   */
  endpoint: string;

  /**
   * Gets or sets the Redis database index (0 by default).
   */
  database: number;

  /**
   * Gets or sets the optional key prefix to namespace entries in Redis.
   */
  prefix?: string;

  /**
   * Gets or sets the password used to authenticate with Redis, if any.
   */
  password?: string;

  /**
   * Gets or sets whether SSL should be used to connect to Redis.
   */
  useSsl: boolean;

  /**
   * Gets or sets the connection timeout in milliseconds.
   */
  timeout?: number;
}
