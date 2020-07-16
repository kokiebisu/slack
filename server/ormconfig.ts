const { config } = require('./config');

module.exports = {
  type: 'postgres',
  host: config.pgHost,
  port: config.pgPort,
  username: config.pgUser,
  password: config.pgPassword,
  database: config.pgDatabase,
  synchronize: true,
  logging: true,
  entities: ['./src/models/*.*'],
};
