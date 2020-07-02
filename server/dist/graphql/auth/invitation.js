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
const type_graphql_1 = require("type-graphql");
const baseResponse_1 = require("../response/baseResponse");
const sendEmail_1 = require("../../util/sendEmail");
const typeorm_1 = require("typeorm");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../../models/User");
const manager = typeorm_1.getManager();
class InvitationResolver {
    sendInvitation(email, name, teamId, { req }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield manager.findOne(User_1.User, {
                    id: (_a = req.session) === null || _a === void 0 ? void 0 : _a.userId,
                });
                if (!user) {
                    return {
                        ok: false,
                        errorlog: "wasn't able to find user",
                    };
                }
                const token = jsonwebtoken_1.default.sign({ email, name, teamId }, `${user.id}`);
                yield sendEmail_1.sendInvitationEmail(email, `${user.id}`, user.fullname, token);
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
    type_graphql_1.Mutation(() => baseResponse_1.BaseResponse),
    __param(0, type_graphql_1.Arg('email')),
    __param(1, type_graphql_1.Arg('name', { nullable: true })),
    __param(2, type_graphql_1.Arg('teamId')),
    __param(3, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], InvitationResolver.prototype, "sendInvitation", null);
exports.InvitationResolver = InvitationResolver;
//# sourceMappingURL=invitation.js.map