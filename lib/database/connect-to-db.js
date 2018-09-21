import { MongoClient } from 'mongodb'

import { MONGO_URL } from '../constants'

export default async databaseName => {
  const client = await MongoClient.connect(MONGO_URL)

  const db = client.db(databaseName)

  return db
}
