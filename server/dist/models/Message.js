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
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Channel_1 = require("./Channel");
const Member_1 = require("./Member");
let Message = class Message extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Message.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => Number),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Message.prototype, "memberId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "channelId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Member_1.Member, (member) => member.messages),
    __metadata("design:type", Member_1.Member)
], Message.prototype, "member", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Channel_1.Channel, (channel) => channel.messages),
    __metadata("design:type", Channel_1.Channel)
], Message.prototype, "channel", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "body", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Message.prototype, "createdAt", void 0);
Message = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity('messages')
], Message);
exports.Message = Message;
//# sourceMappingURL=Message.js.map