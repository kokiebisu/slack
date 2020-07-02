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
const type_graphql_1 = require("type-graphql");
const Channel_1 = require("../../models/Channel");
const Team_1 = require("../../models/Team");
const channelResponse_1 = require("../response/channelResponse");
const isAuthenticated_1 = require("../../middleware/isAuthenticated");
const typeorm_1 = require("typeorm");
const manager = typeorm_1.getManager();
let CreateChannelResolver = class CreateChannelResolver {
    createChannel(context, name, teamId, isPublic, topic, description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = context.req.session.userId;
                if (!userId) {
                    return {
                        ok: false,
                        errorlog: 'was not able to extract userid',
                        channel: null,
                    };
                }
                const team = yield Team_1.Team.findOne(teamId);
                if (!team) {
                    return {
                        ok: false,
                        errorlog: 'no team was found',
                        channel: null,
                    };
                }
                const channel = yield Channel_1.Channel.create({
                    name,
                    teamId,
                    topic,
                    description,
                    isPublic,
                    creator: userId,
                }).save();
                yield manager.query('insert into channel_members ("userId", "channelId") values ($1, $2)', [userId, channel.id]);
                return {
                    ok: true,
                    channel,
                };
            }
            catch (err) {
                throw new Error('error occured when creating channel');
            }
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(isAuthenticated_1.isAuth),
    type_graphql_1.Mutation(() => channelResponse_1.ChannelResponse),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg('name')),
    __param(2, type_graphql_1.Arg('teamId')),
    __param(3, type_graphql_1.Arg('isPublic')),
    __param(4, type_graphql_1.Arg('topic', { nullable: true })),
    __param(5, type_graphql_1.Arg('description', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Boolean, String, String]),
    __metadata("design:returntype", Promise)
], CreateChannelResolver.prototype, "createChannel", null);
CreateChannelResolver = __decorate([
    type_graphql_1.Resolver()
], CreateChannelResolver);
exports.CreateChannelResolver = CreateChannelResolver;
//# sourceMappingURL=createChannel.js.map