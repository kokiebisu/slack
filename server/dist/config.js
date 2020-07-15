"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    redisHost: process.env.REDIS_HOST || '0.0.0.0',
    redisPort: parseInt(process.env.REDIS_PORT) || 6379,
    pgUser: process.env.PGUSER || 'postgres',
    pgHost: process.env.PGHOST || '127.0.0.1',
    pgDatabase: process.env.PGDATABASE || 'slackdb',
    pgPassword: process.env.PGPASSWORD || 'postgres',
    pgPort: parseInt(process.env.PGPORT) || 5432,
};
//# sourceMappingURL=config.js.map