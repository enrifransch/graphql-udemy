import { GraphQLServer } from 'graphql-yoga';

// Scalar types = String, Boolean, Int, Float, ID

// Type definitions (schema)
const typeDefs = `
  type Query {
   greeting(name: String!, position: String): String!
   me: User!
   post: Post!
   add(a: Float!, b: Float!): Float!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Int
  }
`

// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) { return `Greetings ${args.name}! You are at ${args.position}`},
    add(parent, args, ctx, info) { return args.a + args.b},
    me() {
      return { id: 'ano', name: 'name', email: 'culo@culo.com' }
    },
    post() {
      return { id: 'p1', title: 'The post', body: 'This is one of the best posts', published: 2018 }
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log('The server is up!');
});