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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDao = void 0;
class BaseDao {
    create(objectModel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                objectModel.createdTime = new Date();
                const createdObject = yield objectModel.save();
                return Object.assign(Object.assign({}, createdObject), { id: createdObject._id });
            }
            catch (error) {
                throw { message: "Can't create object", error };
            }
        });
    }
    findOne(objectModel, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield objectModel.findOne(parameters);
            }
            catch (error) {
                throw { message: "Can't find object", error };
            }
        });
    }
    deleteOne(objectModel, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield objectModel.deleteOne(parameters);
            }
            catch (error) {
                throw { message: "Can't delete object", error };
            }
        });
    }
    deleteMany(objectModel, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield objectModel.deleteMany(parameters);
            }
            catch (error) {
                throw { message: "Can't delete objects", error };
            }
        });
    }
    find(objectModel, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield objectModel.find(parameters);
            }
            catch (error) {
                throw { message: "Can't find objects", error };
            }
        });
    }
}
exports.BaseDao = BaseDao;
//# sourceMappingURL=base-dao.js.map