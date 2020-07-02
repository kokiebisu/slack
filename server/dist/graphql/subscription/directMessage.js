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
const typeorm_1 = require("typeorm");
const subscriptionResponse_1 = require("../response/subscriptionResponse");
const DirectMessage_1 = require("../../models/DirectMessage");
const manager = typeorm_1.getManager();
const DIRECT_MESSAGE = 'direct message';
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
};
let DirectMessageResolver = class DirectMessageResolver {
    subscribeToDirectMessages({ id, fullname, body, avatarBackground, createdAt }) {
        const date = new Date(createdAt).toLocaleDateString('en-US', options);
        return { id, fullname, body, avatarBackground, createdAt: date };
    }
    sendDirectMessage(toId, body, pubSub, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fromId = req.session.userId;
                const result = yield manager.query('select * from users where users.id = $1', [fromId]);
                const fromUser = result[0];
                if (!fromUser) {
                    return null;
                }
                const directMessage = yield manager
                    .create(DirectMessage_1.DirectMessage, {
                    fromId: fromUser.id,
                    toId: toId,
                    body,
                })
                    .save();
                const payload = {
                    id: directMessage.id,
                    fullname: fromUser.fullname,
                    body,
                    avatarBackground: fromUser.avatarBackground,
                    createdAt: directMessage.createdAt,
                    toId,
                };
                yield pubSub.publish(DIRECT_MESSAGE, payload);
                return {
                    id: directMessage.id,
                    fullname: fromUser.fullname,
                    body,
                    avatarBackground: fromUser === null || fromUser === void 0 ? void 0 : fromUser.avatarBackground,
                    createdAt: directMessage.createdAt.toLocaleDateString('en-US', options),
                };
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    fetchDirectMessages(fromId, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const toId = req.session.userId;
                if (!toId) {
                    return null;
                }
                const data = yield manager.query('select dm.id, u."avatarBackground", u2.fullname as fullname, dm.body, dm."createdAt" from direct_messages dm inner join users u on dm."toId"=u.id inner join users u2 on dm."fromId"=u2.id where dm."fromId"=$1 and dm."toId"=$2', [toId, fromId]);
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
        topics: DIRECT_MESSAGE,
        filter: ({ payload, args }) => payload.toId === args.fromId,
    }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscriptionResponse_1.DisplayingMessage]),
    __metadata("design:returntype", subscriptionResponse_1.DisplayingMessage)
], DirectMessageResolver.prototype, "subscribeToDirectMessages", null);
__decorate([
    type_graphql_1.Mutation(() => subscriptionResponse_1.DisplayingMessage, { nullable: true }),
    __param(0, type_graphql_1.Arg('toId')),
    __param(1, type_graphql_1.Arg('body')),
    __param(2, type_graphql_1.PubSub()),
    __param(3, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, type_graphql_1.PubSubEngine, Object]),
    __metadata("design:returntype", Promise)
], DirectMessageResolver.prototype, "sendDirectMessage", null);
__decorate([
    type_graphql_1.Query(() => [subscriptionResponse_1.DisplayingMessage]),
    __param(0, type_graphql_1.Arg('fromId')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DirectMessageResolver.prototype, "fetchDirectMessages", null);
DirectMessageResolver = __decorate([
    type_graphql_1.Resolver()
], DirectMessageResolver);
exports.DirectMessageResolver = DirectMessageResolver;
//# sourceMappingURL=directMessage.js.map