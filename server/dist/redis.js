"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const port = parseInt(process.env.REDIS_PORT) || 6379;
exports.redis = new ioredis_1.default(port, process.env.REDIS_HOST);
//# sourceMappingURL=redis.js.map