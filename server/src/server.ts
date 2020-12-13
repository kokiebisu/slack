import "reflect-metadata";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolver/user";
import { createConnection } from "typeorm";
import cors from "cors";
import { User } from "./entity/user";
import { DirectMessage } from "./entity/direct-message";
import { ChannelMember } from "./entity/channel-member";
import { Team } from "./entity/team";
import { Message } from "./entity/message";
import { Member } from "./entity/member";
import { Channel } from "./entity/channel";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import session from "express-session";

const main = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "slack",
    logging: true,
    synchronize: true,
    entities: [
      User,
      Team,
      Message,
      Member,
      DirectMessage,
      Channel,
      ChannelMember,
    ],
  });

  const app = Express();

  const RedisStore = connectRedis(session);
  const redis = new Redis({});

  app.use(
    (_req, _res, next) => next(),
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: "token",
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 10,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      },
      saveUninitialized: false,
      secret: "secret",
      resave: false,
    })
  );

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    // passes data to resolvers
    context: ({ req, res }) => ({ req, res, redis }),
  });

  server.applyMiddleware({ app, cors: false });

  app.listen(process.env.PORT, () => {
    console.log("listening on 4000...");
  });
};

main().catch((err) => {
  console.log(err);
});
