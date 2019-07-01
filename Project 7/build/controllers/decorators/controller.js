"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Missing property " + key);
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
function controller(routePrefix) {
    return function (target) {
        // get the global router.
        var router = AppRouter_1.AppRouter.getInstance();
        // iterate the constructor prototype
        for (var key in target.prototype) {
            // get the router handler in controller
            var routeHandler = target.prototype[key];
            // get the path of router
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            // get the method of the router
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            // get the middleware of the router
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            // get the validator props of the router
            var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];
            // produce the validator of the router
            var validator = bodyValidators(requiredBodyProps);
            // if has a path
            if (path) {
                // middlewares, validator are all middlwares
                router[method].apply(router, ["" + routePrefix + path].concat(middlewares, [validator, routeHandler]));
            }
        }
    };
}
exports.controller = controller;
