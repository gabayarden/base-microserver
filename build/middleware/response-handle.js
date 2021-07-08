"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const asyncHandler = require("express-async-handler");
function responseHandler(callback) {
    const handler = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const result = yield callback(req, res, next);
        res.locals.answer = result;
        next();
    });
    return asyncHandler(handler);
}
module.exports = responseHandler;
//# sourceMappingURL=response-handle.js.map