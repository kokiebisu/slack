require('dotenv').config();
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
import { Request, Response, NextFunction } from 'express';
import { redis } from './redis';
import { router as tokenRouter } from './routes/tokenRoutes';

const PORT = process.env.PORT || 4000;

<<<<<<< HEAD
=======
const DATABASE_PORT = parseInt(process.env.DATABASE_PORT!, 10) || 5432;

>>>>>>> a5e666a7a5cb31e579f94097560e4d1f5c03e38d
const allowCrossDomain = (_: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
};

<<<<<<< HEAD
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
=======
const main = async () => {
  // const connection = await createConnection({
  //   type: 'postgres',
  //   // host: process.env.POSTGRES_HOST!,
  //   port: 6379,
  //   username: process.env.POSTGRES_USER!,
  //   password: process.env.POSTGRES_PASSWORD!,
  //   database: process.env.POSTGRES_DB!,
  //   loggin: true,
  //   synchronize: true,
  //   entities: ['./models/*.*'],
  // });

  await createConnection({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: DATABASE_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  });
>>>>>>> a5e666a7a5cb31e579f94097560e4d1f5c03e38d

  const app = Express();

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

  app.use(allowCrossDomain);

  app.use('/refresh_token', tokenRouter);

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );

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
      `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`
    );
  });
};

main();
