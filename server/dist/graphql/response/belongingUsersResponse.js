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
const baseResponse_1 = require("./baseResponse");
let BelongingUsers = class BelongingUsers {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BelongingUsers.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BelongingUsers.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BelongingUsers.prototype, "channelId", void 0);
BelongingUsers = __decorate([
    type_graphql_1.ObjectType()
], BelongingUsers);
let BelongingUsersResponse = class BelongingUsersResponse extends baseResponse_1.BaseResponse {
};
__decorate([
    type_graphql_1.Field(() => [BelongingUsers], { nullable: true }),
    __metadata("design:type", Object)
], BelongingUsersResponse.prototype, "belongingUsers", void 0);
BelongingUsersResponse = __decorate([
    type_graphql_1.ObjectType()
], BelongingUsersResponse);
exports.BelongingUsersResponse = BelongingUsersResponse;
//# sourceMappingURL=belongingUsersResponse.js.map