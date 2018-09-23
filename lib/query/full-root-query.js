import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

import {
  getFirstPage,
  getPageById,
  getBookPages
} from './pages'

import { getBooks } from './books'

export default db => {
  const fullRootQuery = new GraphQLObjectType({
    name: 'FullRootQuery',
    fields: () => ({
      getBooks: getBooks(db),
      getBookPages: getBookPages(db),
      getFirstPage: getFirstPage(db),
      getPageById: getPageById(db)
    })
  })

  return fullRootQuery
}
