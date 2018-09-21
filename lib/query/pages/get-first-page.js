import PageType from '../../schema/page'
import { getFirstPage } from '../../database'

export default (db) => {
  return {
    type: PageType,
    description: 'Get a page by id',
    async resolve () {
      return await getFirstPage(db)
    }
  }
}
