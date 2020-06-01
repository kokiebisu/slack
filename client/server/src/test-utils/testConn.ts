import { createConnection } from 'typeorm';

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ken',
    password: 'kronos111',
    database: 'slack_server',
    synchronize: drop,
    dropSchema: drop,
    entities: ['src/models/*.*'],
  });
};
