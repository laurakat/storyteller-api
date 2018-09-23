import PageType from '../../schema/pages'
import { getFirstPage } from '../../database'

import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

export default (db) => {
  return {
    type: PageType,
    description: 'Get first page of a book',
    args: {
      bookId: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    async resolve (parent, args) {
      return await getFirstPage(db, args.bookId)
    }
  }
}
