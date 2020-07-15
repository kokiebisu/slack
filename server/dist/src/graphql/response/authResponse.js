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
exports.ExtractResponse = exports.InviteResponse = exports.AuthorizationResponse = void 0;
const type_graphql_1 = require("type-graphql");
const baseResponse_1 = require("./baseResponse");
let AuthorizationResponse = class AuthorizationResponse extends baseResponse_1.BaseResponse {
};
AuthorizationResponse = __decorate([
    type_graphql_1.ObjectType()
], AuthorizationResponse);
exports.AuthorizationResponse = AuthorizationResponse;
let InviteResponse = class InviteResponse extends baseResponse_1.BaseResponse {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InviteResponse.prototype, "teamId", void 0);
InviteResponse = __decorate([
    type_graphql_1.ObjectType()
], InviteResponse);
exports.InviteResponse = InviteResponse;
let ExtractResponse = class ExtractResponse extends baseResponse_1.BaseResponse {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ExtractResponse.prototype, "userId", void 0);
ExtractResponse = __decorate([
    type_graphql_1.ObjectType()
], ExtractResponse);
exports.ExtractResponse = ExtractResponse;
//# sourceMappingURL=authResponse.js.map