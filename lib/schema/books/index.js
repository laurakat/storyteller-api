import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'A book',
  fields () {
    return {
      _id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      }
    }
  }
})

export default BookType
