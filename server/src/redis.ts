import Redis from 'ioredis';
import { config } from '../config';

console.log('redishost', config.redisHost);
console.log('redisport', config.redisPort);
console.log('pgdatabase', config.pgDatabase);
console.log('pgpassword', config.pgPassword);
console.log('pghost', config.pgHost);
console.log('pg');

export const redis = new Redis({
  host: config.redisHost,
  port: config.redisPort,
});
