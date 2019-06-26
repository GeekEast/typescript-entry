"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var LoginRouter_1 = __importDefault(require("./routes/LoginRouter"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var app = express_1.default();
// similar to adding the body attribute to req
app.use(express_1.default.urlencoded({ extended: true }));
// similar to adding the session atrribute to req
app.use(cookie_session_1.default({ keys: ['880'] }));
// log the server
app.use(morgan_1.default('tiny'));
// compress the code
app.use(compression_1.default());
app.use('/', LoginRouter_1.default);
// 404 always the last one
app.get('*', function (req, res) {
    res.status(404).send('what???');
});
app.listen('9000', function () { return console.log('Listening on port 9000'); });
