const typeDefs = `
type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }
`;

module.exports = typeDefs;
