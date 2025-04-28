/* based on https://github.com/neuroglia-io/js-framework */

/*
 * Copyright © 2025-Present The DClare Authors
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

/**
 * Returns true if the value is an object but not an array
 * @param value
 * @returns
*/
const isObject = <T extends object>(value: T): boolean => {
    if (!value) return false;
    const type = typeof value;
    return type === 'object' && !Array.isArray(value);
};

/**
 * Returns a deep copy of the provided object
 * @param object the object to copy
 * @param replacer A function that transforms the results.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * @returns A deep copy of the given object
 */
const deepCopy = <T extends object>(
    object: T,
    replacer?: (this: T, key: string, value: T) => T,
    reviver?: (this: T, key: string, value: T) => T,
): T => {
    return JSON.parse(JSON.stringify(object, replacer), reviver);
};

/**
 * Enables inheriting models hydration
 */
export class Hydrator<T extends object> {
    constructor(model?: Partial<T>) {
        if (model && isObject(model)) {
            Object.assign(this, deepCopy(model));
        }
    }
}