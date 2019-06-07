import User from "../../models/User";

export default {
  Query: {
    users: (root, args, context, info) => User.find({})
  },

  Mutation: {
    register: async (root, args, context, info) => {
      const { name, email, password } = args;

      // TODO : Validating user input
      // TODU : Check the email already exists

      const user = await User.create({ name, email, password });

      return user;
    }
  }
};
