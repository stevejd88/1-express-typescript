"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var cookie_session_1 = __importDefault(require("cookie-session"));
var controller_1 = require("./controllers/decorators/controller");
require("./controllers/LoginController");
var app = express_1.default();
// app.use(express.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['lasso'] }));
app.use(loginRoutes_1.router);
app.use(controller_1.router);
app.listen(3000, function () {
    console.log('listening on port 3000');
});
