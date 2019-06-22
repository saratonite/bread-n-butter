import { gql } from "apollo-server-express";

export default gql`
  directive @auth on FIELD_DEFINITION
  extend type Query {
    users: [User] @auth
    me: User @auth
  }
  extend type Mutation {
    register(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): AuthUser
    signOut: Boolean
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type AuthUser {
    token: String
  }
`;
