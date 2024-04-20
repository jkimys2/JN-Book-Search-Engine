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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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

    // Find user and save book to their list
    saveBook: async (parent, { user, body }, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: body } },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticanError;
    },

    // Find user and delete book from their list
    deleteBook: async (parent, { user, params }, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: user._id },
          { $pull: { savedBooks: { bookId: params.bookId } } },
          { new: true }
        );
      }
      throw AuthenticanError;
    },
  },
};

module.exports = resolvers;
