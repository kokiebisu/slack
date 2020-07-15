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
exports.DirectMessage = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const type_graphql_1 = require("type-graphql");
let DirectMessage = class DirectMessage extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DirectMessage.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], DirectMessage.prototype, "fromId", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], DirectMessage.prototype, "toId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.messagesReceived),
    __metadata("design:type", User_1.User)
], DirectMessage.prototype, "from", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.messagesSent),
    __metadata("design:type", User_1.User)
], DirectMessage.prototype, "to", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], DirectMessage.prototype, "body", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], DirectMessage.prototype, "createdAt", void 0);
DirectMessage = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity('direct_messages')
], DirectMessage);
exports.DirectMessage = DirectMessage;
//# sourceMappingURL=DirectMessage.js.map