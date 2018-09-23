export default async (db, bookId) => {
  const Pages = db.collection('pages')

  const page = await Pages.findOne({bookId: bookId, isFirstPage: true})

  return page
}
