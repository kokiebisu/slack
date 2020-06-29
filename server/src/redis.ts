import Redis from 'ioredis';

export const redis = new Redis('redis', {
  port: 6379,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASS,
});
