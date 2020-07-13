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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyResolver = void 0;
const type_graphql_1 = require("type-graphql");
const redis_1 = require("../../redis");
const tokenGenerator_1 = require("../../util/tokenGenerator");
const authResponse_1 = require("../response/authResponse");
const typeorm_1 = require("typeorm");
const User_1 = require("../../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const manager = typeorm_1.getManager();
class VerifyResolver {
    verifyUserByDigit(digit, context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield redis_1.redis.get(`${digit}`);
                if (!token) {
                    return {
                        ok: false,
                        errorlog: 'digit is invalid',
                    };
                }
                const decoded = tokenGenerator_1.getDigitToken(token, digit);
                yield redis_1.redis.del(`${digit}`);
                if (!decoded.userId) {
                    return {
                        ok: false,
                        errorlog: 'user not found',
                    };
                }
                const user = yield manager.query('select * from users where id=$1', [
                    decoded.userId,
                ]);
                yield manager.query('update users set confirmed = true where id=$1', [
                    user[0].id,
                ]);
                if (user.length === 0) {
                    return {
                        ok: false,
                        errorlog: 'unable to find user',
                    };
                }
                context.req.session.userId = decoded.userId;
                return {
                    ok: true,
                    errorlog: 'successful',
                };
            }
            catch (err) {
                throw new Error('error occured while confirming user');
            }
        });
    }
    verifyUserByToken(token, context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = yield redis_1.redis.get(`${token}`);
                if (!userId) {
                    return {
                        ok: false,
                        errorlog: 'not a valid token',
                    };
                }
                context.req.session.userId = userId;
                return {
                    ok: true,
                    errorlog: '',
                };
            }
            catch (err) {
                throw new Error('error occured while verifying user by token');
            }
        });
    }
    verifyUserInvite(token, invitorId, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const decoded = jsonwebtoken_1.default.verify(token, invitorId);
                if (!decoded) {
                    return {
                        ok: false,
                        errorlog: 'not a valid token',
                        teamId: '',
                    };
                }
                if (decoded.email && decoded.teamId && decoded.name) {
                    const { email, teamId } = decoded;
                    const user = yield manager.findOne(User_1.User, {
                        email: email,
                    });
                    if (!user) {
                        return {
                            ok: false,
                            errorlog: 'not a valid token',
                            teamId: '',
                        };
                    }
                    req.session.userId = user.id;
                    yield manager.query(`insert into members ("teamId", "userId") values ($1, $2)`, [teamId, user.id]);
                    const channels = yield manager.query(`select * from channels where "teamId"=$1 and "isPublic"=true`, [teamId]);
                    channels.forEach((channel) => __awaiter(this, void 0, void 0, function* () {
                        yield manager.query(`insert into channel_members ("userId", "channelId") values ($1, $2)`, [user.id, channel.id]);
                    }));
                    return {
                        ok: true,
                        teamId,
                    };
                }
                return {
                    ok: false,
                    errorlog: 'not decoded successfully',
                    teamId: '',
                };
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    createUserInvite(token, invitorId, name, password, avatarBackground, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const decoded = jsonwebtoken_1.default.verify(token, invitorId);
                if (!decoded) {
                    return {
                        ok: false,
                        errorlog: 'not a valid token',
                        teamId: '',
                    };
                }
                const { email, teamId } = decoded;
                const user = yield manager
                    .create(User_1.User, {
                    fullname: name,
                    email,
                    password,
                    confirmed: true,
                    avatarBackground,
                })
                    .save();
                req.session.userId = user.id;
                yield manager.query(`insert into members ("teamId", "userId") values ($1, $2)`, [teamId, user.id]);
                const channels = yield manager.query(`select * from channels where "teamId"=$1 and "isPublic"=true`, [teamId]);
                channels.forEach((channel) => __awaiter(this, void 0, void 0, function* () {
                    yield manager.query(`insert into channel_members ("userId", "channelId") values ($1, $2)`, [user.id, channel.id]);
                }));
                return {
                    ok: true,
                    teamId,
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
    __param(0, type_graphql_1.Arg('digit')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], VerifyResolver.prototype, "verifyUserByDigit", null);
__decorate([
    type_graphql_1.Query(() => authResponse_1.AuthorizationResponse),
    __param(0, type_graphql_1.Arg('token')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VerifyResolver.prototype, "verifyUserByToken", null);
__decorate([
    type_graphql_1.Query(() => authResponse_1.InviteResponse),
    __param(0, type_graphql_1.Arg('token')),
    __param(1, type_graphql_1.Arg('invitorId')),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], VerifyResolver.prototype, "verifyUserInvite", null);
__decorate([
    type_graphql_1.Mutation(() => authResponse_1.InviteResponse),
    __param(0, type_graphql_1.Arg('token')),
    __param(1, type_graphql_1.Arg('invitorId')),
    __param(2, type_graphql_1.Arg('name')),
    __param(3, type_graphql_1.Arg('password')),
    __param(4, type_graphql_1.Arg('avatarBackground')),
    __param(5, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], VerifyResolver.prototype, "createUserInvite", null);
exports.VerifyResolver = VerifyResolver;
//# sourceMappingURL=verify.js.map