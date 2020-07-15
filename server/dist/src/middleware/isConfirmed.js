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
exports.isConfirmed = void 0;
const User_1 = require("src/models/User");
exports.isConfirmed = ({ context }, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.findOne(context.req.session.userId);
        if (!(user === null || user === void 0 ? void 0 : user.confirmed)) {
            return {
                ok: false,
                errorlog: "you haven't confirmed via email",
                user: null,
            };
        }
        return next();
    }
    catch (err) {
        return {
            ok: false,
            errorlog: "wasn't able to find user",
        };
    }
});
//# sourceMappingURL=isConfirmed.js.map