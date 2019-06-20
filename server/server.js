import express from "express";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import tokenMiddleware from "./middlewares/token-middleware";
import routes from "./routes";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import authDricetive from "./graphql/directives/auth-directive";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(tokenMiddleware);
// Attach routes
app.use("/api", routes);

// Apollo server

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: ({ req, res }) => {
    return {
      req,
      res
    };
  },
  schemaDirectives: {
    auth: authDricetive
  }
});

server.applyMiddleware({
  app,
  cors: true
});

export default app;
