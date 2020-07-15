"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.RegisterResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../models/User");
const sendEmail_1 = require("../../util/sendEmail");
const redis_1 = require("../../redis");
const tokenGenerator_1 = require("../../util/tokenGenerator");
const authResponse_1 = require("../response/authResponse");
const typeorm_1 = require("typeorm");
const manager = typeorm_1.getManager();
class RegisterResolver {
    register(email, fullname, password, avatarBackground) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield manager
                    .create(User_1.User, {
                    fullname,
                    email,
                    password,
                    avatarBackground,
                })
                    .save();
                const digit = Math.floor(100000 + Math.random() * 900000);
                const token = tokenGenerator_1.createDigitToken(digit, user);
                yield sendEmail_1.sendDigitEmail(email, digit);
                redis_1.redis.set(`${digit}`, token);
                return {
                    ok: true,
                    errorlog: 'successful',
                };
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    checkEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield manager.findOne(User_1.User, {
                    email,
                });
                if (!user) {
                    return {
                        ok: false,
                        errorlog: 'email is invalid',
                    };
                }
                const token = tokenGenerator_1.createStringToken(user);
                redis_1.redis.set(`${token}`, user.id);
                yield sendEmail_1.sendLinkEmail(email, token);
                return {
                    ok: true,
                };
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
__decorate([
    type_graphql_1.Mutation(() => authResponse_1.AuthorizationResponse),
    __param(0, type_graphql_1.Arg('email')),
    __param(1, type_graphql_1.Arg('fullname')),
    __param(2, type_graphql_1.Arg('password')),
    __param(3, type_graphql_1.Arg('avatarBackground')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Query(() => authResponse_1.AuthorizationResponse),
    __param(0, type_graphql_1.Arg('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "checkEmail", null);
exports.RegisterResolver = RegisterResolver;
//# sourceMappingURL=register.js.map