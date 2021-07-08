"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const injection_container_1 = __importDefault(require("./injection-container"));
const awilix_express_1 = require("awilix-express");
const database_connector_1 = __importDefault(require("./database-connector"));
const logger_1 = __importDefault(require("./logger"));
const helmet_1 = __importDefault(require("helmet"));
const request_context_1 = __importDefault(require("request-context"));
const context_1 = require("./context");
const test_controller_1 = require("./controllers/test-controller");
const app = express();
app.use(helmet_1.default());
new database_connector_1.default().connect();
app.use(request_context_1.default.middleware('request'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});
app.use((req, res, next) => {
    if (!req.originalUrl || req.originalUrl === "/" || req.originalUrl === "") {
        return;
    }
    else {
        logger_1.default.info("Rest call started");
        logger_1.default.info(`Type: ${req.method}, URL: ${req.originalUrl}`);
        logger_1.default.info(`Req body: ${JSON.stringify(req.body)}`);
        next();
    }
});
app.use((req, res, next) => {
    request_context_1.default.set('request:context', new context_1.Context(new Date()));
    next();
});
app.use(awilix_express_1.scopePerRequest(injection_container_1.default));
app.use("/api/test", new test_controller_1.TestController().router);
app.use((req, res, next) => {
    if (!req.route)
        return next(new Error('Url was not matched any route'));
    next();
});
app.use((req, res, next) => {
    if (res.locals.answer !== undefined && res.locals.answer !== null) {
        logger_1.default.info(`rest call end. (no error)`);
        if (res.locals.answer !== "DOWNLOAD") {
            res.status(201).json(res.locals.answer);
        }
    }
    else {
        next(new Error('answer was not found in res.locals'));
    }
});
app.use((error, req, res, next) => {
    logger_1.default.error(`rest call end time: (error) ${new Date()}`);
    logger_1.default.error("Unexpected error:");
    logger_1.default.error(error);
    res.status(500).json({ message: error.message });
});
exports.default = app;
//# sourceMappingURL=app.js.map