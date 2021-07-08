"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const request_context_1 = __importDefault(require("request-context"));
class Context {
    constructor(id) {
        this.id = id;
    }
    static get() {
        const context = request_context_1.default.get('request:context');
        return context;
    }
    static getAccountId() {
        return Context.get().accountId;
    }
    static setAccountId(accountId) {
        Context.get().accountId = accountId;
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map