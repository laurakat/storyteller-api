import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

import {
  getFirstPage,
  getPageById,
} from './pages'

import { getBooks } from './books'

export default db => {
  const fullRootQuery = new GraphQLObjectType({
    name: 'FullRootQuery',
    fields: () => ({
      getPageById: getPageById(db),
      getFirstPage: getFirstPage(db),
      getBooks: getBooks(db)
    })
  })

  return fullRootQuery
}
