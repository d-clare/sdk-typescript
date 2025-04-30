import { plainToInstance, Transform } from 'class-transformer';

// Based on https://github.com/typestack/class-transformer/issues/31#issuecomment-1458097715
export function RecordTransform<T extends Record<string, unknown>>(classType: new () => T[keyof T]): PropertyDecorator {
  return Transform(
    ({ obj, key }) => {
      const record = obj[key] as T;
      if (!record) {
        return;
      }
      return Object.fromEntries(Object.entries(record).map(([key, value]) => [key, plainToInstance(classType, value)]));
    },
    { toClassOnly: true }
  );
}
