"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = require("../config");
console.log('redishost', config_1.config.redisHost);
console.log('redisport', config_1.config.redisPort);
console.log('pgdatabase', config_1.config.pgDatabase);
console.log('pgpassword', config_1.config.pgPassword);
console.log('pghost', config_1.config.pgHost);
console.log('pg');
exports.redis = new ioredis_1.default({
    host: config_1.config.redisHost,
    port: config_1.config.redisPort,
});
//# sourceMappingURL=redis.js.map