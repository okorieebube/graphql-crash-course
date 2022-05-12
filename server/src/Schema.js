const { gql } = require("apollo-server");

const typeDefs = gql`
  "An object listing the query types(types of queries) that can be run on this gql endpoint"
  type Query {
    tracksForHome: [Track!]!
  }

  "A schema object with a type Track"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
  "A schema object with a type Author"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
module.exports = typeDefs;
