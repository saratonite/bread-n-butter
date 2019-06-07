import {
  SchemaDirectiveVisitor,
  AuthenticationError
} from "apollo-server-express";

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    // Re-define Resolve

    field.resolve = async (...args) => {
      const [parent, fieldArgs, context] = args;
      if (!context.req || !context.req.user) {
        throw new AuthenticationError(
          "You must sign in to view this resourse "
        );
      }

      const result = await resolve(args);

      return result;
    };
  }
}

export default AuthDirective;
