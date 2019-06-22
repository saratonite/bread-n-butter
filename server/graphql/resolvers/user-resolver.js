import User from "../../models/User";
import { validateSignup, validateLogin } from "../../validations";
import { UserInputError } from "apollo-server-express";

export default {
  Query: {
    users: (root, args, context, info) => User.find({}),
    me: async (root, args, context, info) => {
      const user = await User.findById(context.req.user.id);
      return user;
    }
  },

  Mutation: {
    register: async (root, args, context, info) => {
      const { name, email, password } = args;

      // Validating user input
      await validateSignup({ name, email, password });

      // Check the email already exists

      const userExistsCheck = await User.findOne({ email });

      if (userExistsCheck) throw new UserInputError("Email already exists");

      const user = await User.create({ name, email, password });

      return user;
    },
    login: async (root, args, context, info) => {
      const { email, password } = args;
      //TODO: Validating user inputs
      await validateLogin({ email, password });

      // Query with email

      const user = await User.findOne({ email });

      if (!user) throw new UserInputError("Invalid user");

      const passwordmatch = await user.matchPassword(password);

      if (!passwordmatch) throw new UserInputError("Invalid credientials");

      let token = await user.getToken();

      return {
        token
      };
    }
  }
};
