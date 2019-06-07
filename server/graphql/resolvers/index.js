import userResolver from "./user-resolver";
const rootResolver = {
  Query: {
    _: (parent, args, context, info) => {
      return "Hello world";
    }
  }
};

export default [rootResolver, userResolver];
