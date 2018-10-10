import PageType from '../../schema/pages'
import { getBookPages } from '../../database'

import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql'

export default (db) => {
  return {
    type: GraphQLList(PageType),
    description: 'Get all pages in a book',
    args: {
      bookId: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    async resolve (parent, args) {
      return await getBookPages(db, args.bookId)
    }
  }
}
