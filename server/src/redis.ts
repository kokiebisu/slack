import Redis from 'ioredis';
import { config } from './config';

<<<<<<< HEAD
export const redis = new Redis(config.REDIS_PORT, config.REDIS_HOST);
=======
export const redis = new Redis('redis', {
  port: 6379,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASS,
});
>>>>>>> a5e666a7a5cb31e579f94097560e4d1f5c03e38d
