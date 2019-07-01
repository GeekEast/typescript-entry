import express from 'express';

/**
 * like a factory to give a router.
 * it will hold the router in prototype.
 * This is used globally. just like a redux store, right?
 */
export class AppRouter {
	private static instance: express.Router;

	static getInstance(): express.Router {
		if (!AppRouter.instance) {
			AppRouter.instance = express.Router();
		}
		return AppRouter.instance;
	}
}
