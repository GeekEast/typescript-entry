"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
// TODO: Import will execute the code actually
require("./controllers/LoginController"); // this will activate all decorators of RootController.
require("./controllers/RootController"); // this will activate all decorators of RootController
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(cookie_session_1.default({ keys: ['laskdjf'] }));
        this.app.use(AppRouter_1.AppRouter.getInstance());
    }
    Server.prototype.start = function (port) {
        this.app.listen(port, function () {
            console.log('Listening on port ' + port);
        });
    };
    return Server;
}());
var server = new Server();
server.start(3000);
