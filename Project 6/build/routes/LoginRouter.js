"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var form = "<form method=\"POST\">\n\t<div>\n\t\t<label>Email</label>\n\t\t<input name=\"email\"/>\n\t</div>\n\t<div>\n\t\t<label>Password</label>\n\t\t<input name=\"password\" type=\"password\">\n\t</div>\n\t<button>Submit</button>\n</form>";
router.get('/login', function (req, res) {
    res.status(200).send(form);
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'xiang.tan@tcpinpoint.com' && password === 'open') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.status(400).send('Incorrect Email or Password!');
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session = undefined;
        res.redirect('/');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n\t\t<div>\n\t\t\t<div>You are successfully logged in.</div>\t\n\t\t\t<a href=\"/logout\">Log out </a>\n\t\t</div>"); // login and log out
    }
    else {
        res.redirect('/login');
    }
});
exports.default = router;
