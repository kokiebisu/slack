require('dotenv').config();
var config: any = {};

config.REDIS_PORT =
  process.env.NODE_ENV === 'production' ? process.env.REDIS_PORT : 6379;
config.REDIS_HOST =
  process.env.NODE_ENV === 'production' ? process.env.REDIS_HOST : 'localhost';
export { config };
