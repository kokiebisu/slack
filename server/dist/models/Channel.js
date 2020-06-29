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
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Team_1 = require("./Team");
const ChannelMember_1 = require("./ChannelMember");
const Message_1 = require("./Message");
const User_1 = require("./User");
let Channel = class Channel extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Channel.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Channel.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Channel.prototype, "isPublic", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Channel.prototype, "teamId", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ nullable: true, default: 'Add a topic' }),
    __metadata("design:type", String)
], Channel.prototype, "topic", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Team_1.Team, (team) => team.channels, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Team_1.Team)
], Channel.prototype, "team", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Channel.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => ChannelMember_1.ChannelMember, (channelmember) => channelmember.channel),
    __metadata("design:type", Array)
], Channel.prototype, "channelMembers", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Channel.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Message_1.Message, (message) => message.channel),
    __metadata("design:type", Array)
], Channel.prototype, "messages", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.channels),
    __metadata("design:type", User_1.User)
], Channel.prototype, "creator", void 0);
Channel = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity('channels')
], Channel);
exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map