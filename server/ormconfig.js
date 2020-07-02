require('dotenv').config();

module.exports = {
  type: 'postgres',
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: true,
  entities: ['./dist/models/*.*'],
};
