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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Member_1 = require("./Member");
const ChannelMember_1 = require("./ChannelMember");
const Channel_1 = require("./Channel");
const DirectMessage_1 = require("./DirectMessage");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "fullname", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text', { unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column('bool', { default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "confirmed", void 0);
__decorate([
    typeorm_1.Column('int', { default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "tokenVersion", void 0);
__decorate([
    typeorm_1.OneToMany(() => Member_1.Member, (member) => member.user),
    __metadata("design:type", Array)
], User.prototype, "members", void 0);
__decorate([
    typeorm_1.OneToMany(() => ChannelMember_1.ChannelMember, (channelmember) => channelmember.user),
    __metadata("design:type", Array)
], User.prototype, "channelMembers", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "avatarBackground", void 0);
__decorate([
    typeorm_1.OneToMany(() => Channel_1.Channel, (channel) => channel.creator),
    __metadata("design:type", Array)
], User.prototype, "channels", void 0);
__decorate([
    typeorm_1.OneToMany(() => DirectMessage_1.DirectMessage, (directMessage) => directMessage.from),
    __metadata("design:type", Array)
], User.prototype, "messagesReceived", void 0);
__decorate([
    typeorm_1.OneToMany(() => DirectMessage_1.DirectMessage, (directMessage) => directMessage.to),
    __metadata("design:type", Array)
], User.prototype, "messagesSent", void 0);
User = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity('users')
], User);
exports.User = User;
//# sourceMappingURL=User.js.map