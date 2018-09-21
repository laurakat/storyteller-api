import PageType from '../../schema/page'
import { getPageById } from '../../database'

import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

export default (db) => {
  return {
    type: PageType,
    description: 'Get a page by id',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    async resolve (parent, args) {
      return await getPageById(db, args.id)
    }
  }
}
