import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

const PageType = new GraphQLObjectType({
  name: 'Page',
  description: 'A page in the visual novel',
  fields () {
    return {
      _id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      text: {
        type: new GraphQLNonNull(GraphQLString)
      },
      sound: {
        type: GraphQLString
      },
      image: {
        type: GraphQLString
      }
    }
  }
})

export default PageType
