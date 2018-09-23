import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

import ChoicesType from './choices'

const PageType = new GraphQLObjectType({
  name: 'Page',
  description: 'A page in the visual novel',
  fields () {
    return {
      _id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
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
