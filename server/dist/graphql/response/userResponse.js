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
const baseResponse_1 = require("./baseResponse");
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../models/User");
let UserResponse = class UserResponse extends baseResponse_1.BaseResponse {
};
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    __metadata("design:type", Object)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
exports.UserResponse = UserResponse;
let UsersResponse = class UsersResponse extends baseResponse_1.BaseResponse {
};
__decorate([
    type_graphql_1.Field(() => [User_1.User], { nullable: true }),
    __metadata("design:type", Object)
], UsersResponse.prototype, "users", void 0);
UsersResponse = __decorate([
    type_graphql_1.ObjectType()
], UsersResponse);
exports.UsersResponse = UsersResponse;
//# sourceMappingURL=userResponse.js.map