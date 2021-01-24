import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

const dotenv = require('dotenv')
dotenv.config()

const DB_URI = process.env.MONGO_DB_URI
const DB_NAME = process.env.MONGO_DB_NAME

const typeDefs = gql`
  type Query {
    sayHello: String
    users: [User]
  }
  type User {
    _id: String,
    name: String
  }
`

const resolvers = {
  Query: {
    sayHello: (parent, args, context) => {
      return 'Hi'
    },
    users: async (parent, args, context, info) => {
      const users = await context.db.collection('users').find().toArray()
      return users
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

let db;

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    await client.connect()
    db = client.db(DB_NAME)
    return { db }
  }
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })