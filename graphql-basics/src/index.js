import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
  type Query {
    hello: String!,
    name: String!,
    location: String!,
    bio: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'Hello world'
    },
    name() {
      return 'Me llamo Ramon Salazar'
    },
    location() {
      return 'Ciudad de Mexico'
    },
    bio() {
      return 'Me gustan los shots'
    }
  }
}

const server = new GraphQLServer({typeDefs, resolvers});

server.start(() => {
  console.log('The server is up!');
});