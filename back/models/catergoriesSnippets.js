// export const createCategoriesSnippetsTable = async (db) => {
//     await db.query('DROP TABLE IF EXISTS categories_snippets CASCADE')
//     try {
//       await db.query(`CREATE TABLE categories_snippets (
//       "id" serial NOT NULL PRIMARY KEY,
//       "snippet_id" integer NOT NULL REFERENCES "snippets" ("id") DEFERRABLE INITIALLY DEFERRED,
//       "categorie_id" integer NOT NULL REFERENCES "categories" ("id") DEFERRABLE INITIALLY DEFERRED)`)
//       console.log('Table categories_snippets created !')
//     } catch (e) {
//       console.log(err)
//     }
//   }
export const createCategoriesSnippetsTable = async (db) => {
  await db.schema.dropTableIfExists('categories_snippets')
  try {
    await db.schema
      .createTable('categories_snippets', table => {
        table.increments('id').primary()
        table.foreign('categorie_id').references('categories.id').onDelete().deferrable('deferred')
        table.foreign('snippet_id').references('snippets.id').onDelete().deferrable('deferred')
      })
  } catch (e) {
    console.log(e)
  }
}
