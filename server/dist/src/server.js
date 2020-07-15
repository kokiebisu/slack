"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const redis_1 = require("./redis");
const tokenRoutes_1 = require("./routes/tokenRoutes");
const PORT = process.env.PORT || 4000;
(() => __awaiter(void 0, void 0, void 0, function* () {
    let path = __dirname + '/graphql/**/*.js' || __dirname + '/graphql/**/*.ts';
    let retries = 5;
    while (retries) {
        try {
            yield typeorm_1.createConnection();
            break;
        }
        catch (err) {
            console.log(err);
            retries -= 1;
            console.log(`retries left: ${retries}`);
            yield new Promise((res) => setTimeout(res, 5000));
        }
    }
    const app = express_1.default();
    app.use(cors_1.default({
        credentials: true,
        origin: 'http://34.105.56.225:80',
    }));
    app.use(cookie_parser_1.default());
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [path],
        }),
        introspection: true,
        playground: true,
        context: ({ req, res }) => ({
            req,
            res,
        }),
    });
    app.use('/refresh_token', tokenRoutes_1.router);
    const RedisStore = connect_redis_1.default(express_session_1.default);
    app.use(express_session_1.default({
        store: new RedisStore({
            client: redis_1.redis,
        }),
        name: 'qid',
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    }));
    apolloServer.applyMiddleware({ app, cors: true });
    const httpServer = http_1.createServer(app);
    apolloServer.installSubscriptionHandlers(httpServer);
    httpServer.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
        console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`);
    });
}))();
//# sourceMappingURL=server.js.map