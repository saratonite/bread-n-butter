import { gql } from "apollo-server-express";

import user from "./user-schema";

root = gql`
  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;

export default [root, user];
