import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import dephLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import compression from 'compression'
import './types/character'
import schema from './schema'

const app = express()
const server = new ApolloServer({
  schema,
  validationRules: [dephLimit(7)]
})

app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

httpServer.listen(
  { port: 4000 },
  (): void => console.log(`\n🚀  GraphQL is now running on http://localhost:4000/graphql`)
)