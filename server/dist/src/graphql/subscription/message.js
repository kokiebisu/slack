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
exports.MessageResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Message_1 = require("../../models/Message");
const User_1 = require("../../models/User");
const subscriptionResponse_1 = require("../response/subscriptionResponse");
const manager = typeorm_1.getManager();
const CHANNEL_MESSAGE = 'channel message';
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
};
let MessageResolver = class MessageResolver {
    subscribeToMessages({ id, fullname, body, avatarBackground, createdAt }, _) {
        const date = new Date(createdAt).toLocaleDateString('en-US', options);
        console.log('entered subscribe to message');
        return {
            id,
            fullname,
            body,
            avatarBackground,
            createdAt: date,
        };
    }
    sendMessage(channelId, teamId, body, pubSub, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('entered send message');
                const userId = req.session.userId;
                const member = yield manager.query('select id from members where "userId"=$1 and "teamId"=$2', [userId, teamId]);
                const memberId = member[0].id;
                const message = yield manager
                    .create(Message_1.Message, {
                    channelId,
                    memberId,
                    body,
                })
                    .save();
                const user = yield manager.findOne(User_1.User, {
                    id: userId,
                });
                if (!user) {
                    return null;
                }
                const payload = {
                    id: message.id,
                    channelId,
                    fullname: user === null || user === void 0 ? void 0 : user.fullname,
                    body,
                    avatarBackground: user === null || user === void 0 ? void 0 : user.avatarBackground,
                    createdAt: message.createdAt,
                };
                yield pubSub.publish(CHANNEL_MESSAGE, payload);
                return {
                    id: message.id,
                    fullname: user === null || user === void 0 ? void 0 : user.fullname,
                    body,
                    avatarBackground: user === null || user === void 0 ? void 0 : user.avatarBackground,
                    createdAt: message.createdAt.toLocaleDateString('en-US', options),
                };
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    fetchMessages(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('entered fetch message');
                const data = yield manager.query('select mes.id, u.fullname, u."avatarBackground", mes.body, mes."createdAt" from messages mes inner join members mem on mes."memberId"=mem.id inner join users u on mem."userId"=u.id where "channelId"=$1', [channelId]);
                let date;
                data.forEach((message) => {
                    date = new Date(message['createdAt']).toLocaleString('en-US', options);
                    message['createdAt'] = date;
                });
                return data;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
};
__decorate([
    type_graphql_1.Subscription(() => subscriptionResponse_1.DisplayingMessage, {
        topics: CHANNEL_MESSAGE,
        filter: ({ payload, args }) => payload.channelId === args.channelID,
    }),
    __param(0, type_graphql_1.Root()),
    __param(1, type_graphql_1.Arg('channelID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscriptionResponse_1.DisplayingMessage, String]),
    __metadata("design:returntype", subscriptionResponse_1.DisplayingMessage)
], MessageResolver.prototype, "subscribeToMessages", null);
__decorate([
    type_graphql_1.Mutation(() => subscriptionResponse_1.DisplayingMessage),
    __param(0, type_graphql_1.Arg('channelId')),
    __param(1, type_graphql_1.Arg('teamId')),
    __param(2, type_graphql_1.Arg('body')),
    __param(3, type_graphql_1.PubSub()),
    __param(4, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, type_graphql_1.PubSubEngine, Object]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "sendMessage", null);
__decorate([
    type_graphql_1.Query(() => [subscriptionResponse_1.DisplayingMessage]),
    __param(0, type_graphql_1.Arg('channelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "fetchMessages", null);
MessageResolver = __decorate([
    type_graphql_1.Resolver()
], MessageResolver);
exports.MessageResolver = MessageResolver;
//# sourceMappingURL=message.js.map