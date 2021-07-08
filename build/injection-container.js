"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const test_dao_1 = require("./dao/test-dao");
const test_service_1 = __importDefault(require("./services/test-service"));
const container = awilix_1.createContainer();
container.register({
    testDao: awilix_1.asClass(test_dao_1.TestDao).classic(),
    testService: awilix_1.asClass(test_service_1.default).classic()
});
exports.default = container;
//# sourceMappingURL=injection-container.js.map