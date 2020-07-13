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
exports.Team = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Channel_1 = require("./Channel");
const Member_1 = require("./Member");
let Team = class Team extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Team.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Team.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Team.prototype, "ownerId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Team.prototype, "avatarBackground", void 0);
__decorate([
    typeorm_1.OneToMany(() => Member_1.Member, (member) => member.team),
    __metadata("design:type", Array)
], Team.prototype, "members", void 0);
__decorate([
    typeorm_1.OneToMany(() => Channel_1.Channel, (channel) => channel.team, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Team.prototype, "channels", void 0);
Team = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity('teams')
], Team);
exports.Team = Team;
//# sourceMappingURL=Team.js.map