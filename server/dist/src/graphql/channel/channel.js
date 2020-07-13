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
exports.ChannelResolver = void 0;
const type_graphql_1 = require("type-graphql");
const channelResponse_1 = require("../response/channelResponse");
const isAuthenticated_1 = require("../../middleware/isAuthenticated");
const typeorm_1 = require("typeorm");
const manager = typeorm_1.getManager();
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
};
let ChannelResolver = class ChannelResolver {
    getChannelById(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channelArray = yield manager.query('select c.id, c.name, c."isPublic", c."teamId", c.description, c."createdAt", c.topic, u.fullname from channels c inner join users u on c."creatorId" = u.id where c.id=$1', [channelId]);
                const channel = channelArray[0];
                if (!channel) {
                    return {
                        ok: false,
                        errorlog: 'no channels found',
                        channel: null,
                    };
                }
                const date = new Date(channel['createdAt']).toLocaleString('en-US', options);
                channel['createdAt'] = date;
                return {
                    ok: true,
                    channel,
                };
            }
            catch (err) {
                throw new Error('error occured when finding channels');
            }
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(isAuthenticated_1.isAuth),
    type_graphql_1.Query(() => channelResponse_1.ChannelWithFullNameResponse),
    __param(0, type_graphql_1.Arg('channelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChannelResolver.prototype, "getChannelById", null);
ChannelResolver = __decorate([
    type_graphql_1.Resolver()
], ChannelResolver);
exports.ChannelResolver = ChannelResolver;
//# sourceMappingURL=channel.js.map