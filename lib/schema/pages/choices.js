import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql'

export default new GraphQLObjectType({
  name: 'ChoicesType',
  fields () {
    return {
      nextPage: {
        type: GraphQLString
      },
      text: {
        type: GraphQLString
      }
    }
  }
})
