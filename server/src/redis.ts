import Redis from 'ioredis';
import { config } from './config';

console.log('redis_port', config.REDIS_PORT);
console.log('redis_host', config.REDIS_HOST);

export const redis = new Redis(config.REDIS_PORT, config.REDIS_HOST);
