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
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../models/User");
const tokenGenerator_1 = require("../util/tokenGenerator");
exports.refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.rtoken;
    if (!token) {
        return res.send({
            ok: false,
            errorlog: 'token not found from cookies',
            accessToken: '',
        });
    }
    let payload = null;
    try {
        payload = jsonwebtoken_1.verify(token, process.env.REFRESH_TOKEN_SECRET);
    }
    catch (err) {
        return res.send({
            ok: false,
            errorlog: 'cannot verify your token',
            accessToken: '',
        });
    }
    const user = yield User_1.User.findOne({ id: payload.userId });
    if (!user) {
        return res.send({
            ok: false,
            error: 'cannot find user by the given payload',
            accessToken: '',
        });
    }
    if (user.tokenVersion !== payload.tokenVersion) {
        return res.send({
            ok: false,
            errorlog: 'you have an invalid token',
            accessToken: '',
        });
    }
    res.cookie('rtoken', tokenGenerator_1.createRefreshToken(user), { httpOnly: true });
    return res.send({ ok: true, accessToken: tokenGenerator_1.createAccessToken(user) });
});
//# sourceMappingURL=refreshToken.js.map