import Redis from 'ioredis';
import { config } from '../config';

console.log('config', config.pgDatabase);
export const redis = new Redis({ host: 'redis' });
