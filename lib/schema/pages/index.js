import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

import ChoicesType from './choices'

const PageType = new GraphQLObjectType({
  name: 'Page',
  description: 'A page in the book',
  fields () {
    return {
      _id: {
        type: GraphQLString
      },
      bookId: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      chapterNumber: {
        type: GraphQLInt
      },
      chapterTitle: {
        type: GraphQLString
      },
      text: {
        type: GraphQLString
      },
      sound: {
        type: GraphQLString
      },
      image: {
        type: GraphQLString
      },
      choices: {
        type: new GraphQLList(ChoicesType)
      }
    }
  }
})

export default PageType
