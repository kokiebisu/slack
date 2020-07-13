"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDigitToken = exports.createDigitToken = exports.createStringToken = exports.createRefreshToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.createAccessToken = (user) => {
    return jsonwebtoken_1.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
    });
};
exports.createRefreshToken = (user) => {
    return jsonwebtoken_1.sign({ userId: user.id, tokenVersion: user.tokenVersion }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d',
    });
};
exports.createStringToken = (user) => {
    const token = bcryptjs_1.default.hash(user.email, 10);
    return jsonwebtoken_1.sign({ userId: user.id }, `${token}${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: '1h' });
};
exports.createDigitToken = (digit, user) => {
    return jsonwebtoken_1.sign({ userId: user.id }, `${digit}${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: '1h' });
};
exports.getDigitToken = (token, digit) => {
    return jsonwebtoken_1.verify(token, `${digit}${process.env.ACCESS_TOKEN_SECRET}`);
};
//# sourceMappingURL=tokenGenerator.js.map