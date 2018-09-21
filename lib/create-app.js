import express from 'express'
import express_graphql from 'express-graphql'

import {
  GraphQLSchema
} from 'graphql'

import { PORT } from './constants'

import { getFullRootQueryType } from './query'
import { connectToDB } from './database'

export default async () => {
  const db = await connectToDB('beauty')

  const FullSchema = new GraphQLSchema({
    query: getFullRootQueryType(db)
  })

  const app = express()

  app.use('/graphql', express_graphql({
    schema: FullSchema,
    graphiql: true
  }))

  app.listen(PORT, () => {
    console.log(`Express GraphQL Server Now Running on localhost:${PORT}/graphql`)
  })
}
