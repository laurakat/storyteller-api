export default async (db, bookId) => {
  const Pages = db.collection('pages')

  const pages = await Pages.find({ bookId }).toArray()

  return pages
}
