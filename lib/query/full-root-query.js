import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

import {
  getFirstPage,
  getPageById,
} from './pages'

export default db => {
  const fullRootQuery = new GraphQLObjectType({
    name: 'FullRootQuery',
    fields: () => ({
      getPageById: getPageById(db),
      getFirstPage: getFirstPage(db)
    })
  })

  return fullRootQuery
}