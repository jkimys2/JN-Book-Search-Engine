// Import files
const { User } = require("../models/User");
const { signToken, AuthenticanError } = require("../utils/auth");

const resolvers = {
  // Finds a single user by id
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticanError;
    },
  },

  Mutation: {
    // Create a new user and assign a token
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    // Authenticate a user when they log in and assign a token
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticanError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticanError;
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
