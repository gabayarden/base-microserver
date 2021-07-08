"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const logger_1 = __importDefault(require("./logger"));
require("source-map-support/register");
class Server {
    normalizePort(val) {
        const port = parseInt(val, 10);
        if (isNaN(port)) {
            // named pipe
            return val;
        }
        if (port >= 0) {
            // port number
            return port;
        }
        return false;
    }
    ;
    onError(error) {
        // console.log("Error create server");
        if (error.syscall !== "listen") {
            throw error;
        }
        // const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
        // switch (error.code) {
        //   case "EACCES":
        //     console.error(bind + " requires elevated privileges");
        //     process.exit(1);
        //     break;
        //   case "EADDRINUSE":
        //     console.error(bind + " is already in use");
        //     process.exit(1);
        //     break;
        //   default:
        //     throw error;
        // }
    }
    ;
    onListening() {
        // const addr = server.address();
        // const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
        // debug("Listening on " + bind);
    }
    ;
    start() {
        const port = this.normalizePort(process.env.PORT || "3000");
        app_1.default.set("port", port);
        const server = http_1.default.createServer(app_1.default);
        server.on("error", this.onError);
        server.on("listening", this.onListening);
        server.listen(port);
        logger_1.default.info("Listening on port " + port);
    }
}
new Server().start();
//# sourceMappingURL=server.js.map