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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsResponse = exports.ChannelResponse = exports.ChannelWithFullNameResponse = exports.ChannelWithFullName = void 0;
const type_graphql_1 = require("type-graphql");
const Channel_1 = require("../../models/Channel");
const baseResponse_1 = require("./baseResponse");
let ChannelWithFullName = class ChannelWithFullName {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ChannelWithFullName.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ChannelWithFullName.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    __metadata("design:type", Boolean)
], ChannelWithFullName.prototype, "isPublic", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ChannelWithFullName.prototype, "teamId", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], ChannelWithFullName.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ChannelWithFullName.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ChannelWithFullName.prototype, "topic", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ChannelWithFullName.prototype, "fullname", void 0);
ChannelWithFullName = __decorate([
    type_graphql_1.ObjectType()
], ChannelWithFullName);
exports.ChannelWithFullName = ChannelWithFullName;
let ChannelWithFullNameResponse = class ChannelWithFullNameResponse extends baseResponse_1.BaseResponse {
};
__decorate([
    type_graphql_1.Field(() => ChannelWithFullName, { nullable: true }),
    __metadata("design:type", Object)
], ChannelWithFullNameResponse.prototype, "channel", void 0);
ChannelWithFullNameResponse = __decorate([
    type_graphql_1.ObjectType()
], ChannelWithFullNameResponse);
exports.ChannelWithFullNameResponse = ChannelWithFullNameResponse;
let ChannelResponse = class ChannelResponse extends baseResponse_1.BaseResponse {
};
__decorate([
    type_graphql_1.Field(() => Channel_1.Channel, { nullable: true }),
    __metadata("design:type", Object)
], ChannelResponse.prototype, "channel", void 0);
ChannelResponse = __decorate([
    type_graphql_1.ObjectType()
], ChannelResponse);
exports.ChannelResponse = ChannelResponse;
let ChannelsResponse = class ChannelsResponse extends baseResponse_1.BaseResponse {
};
__decorate([
    type_graphql_1.Field(() => [Channel_1.Channel], { nullable: true }),
    __metadata("design:type", Object)
], ChannelsResponse.prototype, "channels", void 0);
ChannelsResponse = __decorate([
    type_graphql_1.ObjectType()
], ChannelsResponse);
exports.ChannelsResponse = ChannelsResponse;
//# sourceMappingURL=channelResponse.js.map