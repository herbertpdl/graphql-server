import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

import { getCharacterByName } from './services'

const typeDefs = gql`
  type Query {
    hello: String,
    getCharacter: Object
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getCharacter: getCharacterByName()
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => 
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
)