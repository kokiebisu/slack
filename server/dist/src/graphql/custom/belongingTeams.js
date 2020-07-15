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
exports.BelongingTeamsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const belongingTeamsResponse_1 = require("../response/belongingTeamsResponse");
const typeorm_1 = require("typeorm");
const manager = typeorm_1.getManager();
class BelongingTeamsResolver {
    getBelongingTeams({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const belongingTeams = yield manager.query(`select t.name, t.id, t."avatarBackground" from members m inner join teams t on m."teamId" = t.id inner join users u on m."userId" = u.id where u.id=$1`, [userId]);
            if (belongingTeams.length === 0) {
                return {
                    ok: false,
                    errorlog: "you don't seem to belong to any teams!",
                };
            }
            return {
                ok: true,
                errorlog: null,
                belongingTeams,
            };
        });
    }
}
__decorate([
    type_graphql_1.Query(() => belongingTeamsResponse_1.BelongingTeamsResponse),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BelongingTeamsResolver.prototype, "getBelongingTeams", null);
exports.BelongingTeamsResolver = BelongingTeamsResolver;
//# sourceMappingURL=belongingTeams.js.map