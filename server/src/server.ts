import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { createServer } from 'http';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import session from 'express-session';
import cors from 'cors';
import connectRedis from 'connect-redis';
import cookieParser from 'cookie-parser';
import { redis } from './redis';
import { router as tokenRouter } from './routes/tokenRoutes';

const PORT = process.env.PORT || 4000;

(async () => {
  let path =
    process.env.NODE_ENV === 'production'
      ? __dirname + '/graphql/**/*.js'
      : __dirname + '/graphql/**/*.ts';
  let retries = 5;
  while (retries) {
    try {
      await createConnection();
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }

  const app = Express();
  const origin = `http://${process.env.ORIGIN}`;
  console.log('origin', origin);
  // app.use(allowCrossDomain);
  app.use(cookieParser());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [path],
    }),
    introspection: true,
    playground: true,
    // Enable adding cookies to the session
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
  });

  // app.use(allowCrossDomain);

  app.use('/refresh_token', tokenRouter);

  app.use(
    cors({
      credentials: true,
      origin,
    })
  );

  const RedisStore = connectRedis(session);

  // Session will be added to the request object
  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      // cookie
      name: 'qid',
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        // secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );

  apolloServer.applyMiddleware({ app, cors: false });

  const httpServer = createServer(app);

  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port: PORT }, () => {
    console.log(
      `🚀 Server ready at http://${process.env.HOST}/${apolloServer.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://${process.env.HOST}/${apolloServer.subscriptionsPath}`
    );
  });
})();
