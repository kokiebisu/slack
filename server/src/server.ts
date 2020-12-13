require("dotenv").config();
import "reflect-metadata";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import cors from "cors";
import connectRedis from "connect-redis";
import { redis } from "./redis";
import session from "express-session";

/** entities */
import { User } from "./entity/user";
import { DirectMessage } from "./entity/direct-message";
import { ChannelMember } from "./entity/channel-member";
import { Team } from "./entity/team";
import { Message } from "./entity/message";
import { Member } from "./entity/member";
import { Channel } from "./entity/channel";

/** resolvers */
import { UserResolver } from "./resolver/user";
import { TeamResolver } from "./resolver/team";
import { createServer } from "http";
import { AuthResolver } from "./resolver/auth";
import { DirectMessageResolver } from "./resolver/directMessage";
import { MessageResolver } from "./resolver/message";
import { ChannelResolver } from "./resolver/channel";

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
      resolvers: [
        UserResolver,
        TeamResolver,
        ChannelResolver,
        DirectMessageResolver,
        MessageResolver,
        AuthResolver,
      ],
      validate: false,
    }),
    // passes data to resolvers
    context: ({ req, res }) => ({ req, res, redis }),
  });

  server.applyMiddleware({ app, cors: false });

  const httpServer = createServer(app);

  server.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:4000${server.subscriptionsPath}`
    );
  });
};

main().catch((err) => {
  console.log(err);
});
