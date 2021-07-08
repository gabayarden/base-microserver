"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DatabaseConnector {
    connect() {
        return new Promise((resolve, reject) => {
            mongoose_1.default.set('useNewUrlParser', true);
            mongoose_1.default.set('useFindAndModify', false);
            mongoose_1.default.set('useCreateIndex', true);
            mongoose_1.default
                .connect(process.env.databaseUrl ? process.env.databaseUrl : "")
                .then((db) => {
                // console.log("Connected to database!");
                resolve(db);
            })
                .catch((error) => {
                //  console.log("Connection failed!");
                reject(error);
            });
        });
    }
}
exports.default = DatabaseConnector;
//# sourceMappingURL=database-connector.js.map