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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutResolver = void 0;
const type_graphql_1 = require("type-graphql");
const authResponse_1 = require("../response/authResponse");
class LogoutResolver {
    logout(context) {
        return new Promise((res, rej) => {
            var _a;
            (_a = context.req.session) === null || _a === void 0 ? void 0 : _a.destroy((err) => {
                if (err) {
                    return rej({
                        ok: false,
                        errorlog: 'there was an error',
                    });
                }
                context.res.clearCookie('qid');
                return res({
                    ok: true,
                    errorlog: 'successful',
                });
            });
        });
    }
}
__decorate([
    type_graphql_1.Mutation(() => authResponse_1.AuthorizationResponse),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogoutResolver.prototype, "logout", null);
exports.LogoutResolver = LogoutResolver;
//# sourceMappingURL=logout.js.map