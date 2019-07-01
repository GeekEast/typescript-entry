import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function bodyValidator(...keys: string[]) {
	return function(target: any, key: string, desc: PropertyDescriptor) {
		console.log(target);
		Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
	};
}
