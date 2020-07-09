const config = require('./src/config');

module.exports = {
  type: 'postgres',
  port: config.pgPort,
  username: config.pgUser,
  password: config.pgPassword,
  database: config.pgDatabase,
  synchronize: true,
  logging: true,
  entities: ['./dist/models/*.*'],
};
