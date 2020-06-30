import Redis from 'ioredis';
import { config } from './config';

export const redis = new Redis({
  host: config.REDIS_HOST,
  port: config.REDIS_PORT,
});
