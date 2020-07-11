require('dotenv').config();

interface Props {
  redisHost: string;
  redisPort: number;
  pgUser: string;
  pgHost: string;
  pgDatabase: string;
  pgPassword: string;
  pgPort: number;
}

export const config: Props = {
  redisHost: process.env.REDIS_HOST!,
  redisPort: parseInt(process.env.REDIS_PORT!),
  pgUser: process.env.POSTGRES_USER!,
  pgHost: process.env.POSTGRES_HOST!,
  pgDatabase: process.env.POSTGRES_DB!,
  pgPassword: process.env.POSTGRES_PASSWORD!,
  pgPort: parseInt(process.env.POSTGRES_PORT!),
};
