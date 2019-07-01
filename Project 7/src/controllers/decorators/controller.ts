import 'reflect-metadata';
import { Request, Response, RequestHandler, NextFunction } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function bodyValidators(keys: string): RequestHandler {
	return function(req: Request, res: Response, next: NextFunction) {
		if (!req.body) {
			res.status(422).send('Invalid request');
			return;
		}

		for (let key of keys) {
			if (!req.body[key]) {
				res.status(422).send(`Missing property ${key}`);
				return;
			}
		}

		next();
	};
}

/**
 * the last decorator to be execute when the corresponding controller class is declared.
 * @param routePrefix the prefix of the routes
 */
export function controller(routePrefix: string) {
	return function(target: Function) {
		// get the global router.
		const router = AppRouter.getInstance();

		// iterate the constructor prototype
		for (let key in target.prototype) {
			// get the router handler in controller
			const routeHandler = target.prototype[key];
			// get the path of router
			const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
			// get the method of the router
			const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
			// get the middleware of the router
			const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
			// get the validator props of the router
			const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];
			// produce the validator of the router
			const validator = bodyValidators(requiredBodyProps);

			// if has a path
			if (path) {
				// middlewares, validator are all middlwares
				router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
			}
		}
	};
}
