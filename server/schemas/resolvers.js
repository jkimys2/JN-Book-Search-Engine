// Import files
const { User } = require("../models/User");
const { signToken, AuthenticanError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticanError;
    },
  },
};

module.exports = resolvers;
