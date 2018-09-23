import BookType from '../../schema/books'
import { getBooks } from '../../database'

import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql'

export default (db) => {
  return {
    type: GraphQLList(BookType),
    description: 'Get all books',
    async resolve () {
      return await getBooks(db)
    }
  }
}
