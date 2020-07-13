"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    redisHost: process.env.REDIS_HOST || '127.0.0.1',
    redisPort: parseInt(process.env.REDIS_PORT) || 6379,
    pgUser: process.env.POSTGRES_USER || 'postgres',
    pgHost: process.env.POSTGRES_HOST || '127.0.0.1',
    pgDatabase: process.env.POSTGRES_DB || 'slackdb',
    pgPassword: process.env.POSTGRES_PASSWORD || 'postgres',
    pgPort: parseInt(process.env.POSTGRES_PORT) || 5432,
};
//# sourceMappingURL=config.js.map