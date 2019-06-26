"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var form = "<form method=\"POST\">\n\t<div>\n\t\t<label>Email</label>\n\t\t<input name=\"email\"/>\n\t</div>\n\t<div>\n\t\t<label>Password</label>\n\t\t<input name=\"password\" type=\"password\">\n\t</div>\n\t<button>Submit</button>\n</form>";
router.get('/', function (req, res) {
    res.status(200).send(form);
});
router.post('/', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.status(200).send('Welcome Back');
});
exports.default = router;
