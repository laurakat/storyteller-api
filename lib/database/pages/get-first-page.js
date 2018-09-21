export default async (db, pageId) => {
  const Pages = db.collection('pages')

  const page = await Pages.findOne({isFirstPage: true})

  return page
}
