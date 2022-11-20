// export const createCategoriesTable = async (db) => {
//     await db.query('DROP TABLE IF EXISTS categories CASCADE')
//     try {
//       await db.query(
//        `Create TABLE categories(
//       ID SERIAL PRIMARY KEY,
//       name VARCHAR(50) UNIQUE, bg_color VARCHAR(50),
//       text_color VARCHAR(240))`
//       )
//       console.log('Table categories created !')
//     } catch (err) {
//       console.log(err)
//     }
//   }
export const createCategoriesTable = async (db) => {
  await db.schema.dropTableIfExists('categories')
  try {
    await db.schema
      .createTable('categories', table => {
        table.increments('id').primary()
        table.string('name').unique()
        table.string('text_color')
      })
  } catch (e) {
    console.log(e)
  }
}
