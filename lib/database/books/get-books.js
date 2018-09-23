export default async (db) => {
  const Books = db.collection('books')

  const books = await Books.find({}).toArray()

  return books
}
