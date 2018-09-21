export default async (db, pageId) => {
  const Pages = db.collection('pages')

  const page = await Pages.findOne({_id: pageId})

  return page
}
