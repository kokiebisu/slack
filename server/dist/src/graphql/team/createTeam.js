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
exports.CreateTeamResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Team_1 = require("../../models/Team");
const teamResponse_1 = require("../response/teamResponse");
const isAuthenticated_1 = require("../../middleware/isAuthenticated");
const typeorm_1 = require("typeorm");
const manager = typeorm_1.getManager();
let CreateTeamResolver = class CreateTeamResolver {
    createTeam(name, avatarBackground, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.session.userId;
                const team = yield manager
                    .create(Team_1.Team, {
                    name,
                    avatarBackground,
                    ownerId: userId,
                })
                    .save();
                yield manager.query('insert into members ("teamId", "userId") values ($1, $2)', [team.id, userId]);
                return {
                    ok: true,
                    team,
                };
            }
            catch (err) {
                throw new Error('error occured when creating the team');
            }
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(isAuthenticated_1.isAuth),
    type_graphql_1.Mutation(() => teamResponse_1.TeamResponse),
    __param(0, type_graphql_1.Arg('name')),
    __param(1, type_graphql_1.Arg('avatarBackground')),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CreateTeamResolver.prototype, "createTeam", null);
CreateTeamResolver = __decorate([
    type_graphql_1.Resolver()
], CreateTeamResolver);
exports.CreateTeamResolver = CreateTeamResolver;
//# sourceMappingURL=createTeam.js.map