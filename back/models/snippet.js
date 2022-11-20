// export const createSnippetsTable = async (db) => {
//     await db.query('DROP TABLE IF EXISTS snippets CASCADE')
//     try {
//       await db.query(`Create TABLE snippets(
//           ID SERIAL PRIMARY KEY NOT NULL,
//       name VARCHAR(50) UNIQUE NOT NULL,
//       description VARCHAR(250)NOT NULL,
//       created_at TIMESTAMP NOT NULL,
//       firebase_path VARCHAR(250) NOT NULL,
//       code VARCHAR(250),
//       backup_path VARCHAR(250)
//       )`)
//       console.log('Table Snippets created !')
//     } catch (e) {
//       console.log(err)
//     }
//   }
export const createSnippetsTable = async (db) => {
  await db.schema.dropTableIfExists('snippets')
  try {
    await db.schema
      .createTable('snippets', table => {
        table.increments('id').primary()
        table.string('name').unique()
        table.timestamp('created_at').defaultTo(db.fn.now())
        table.string('firebase_path')
        table.string('code')
        table.string('backup_path')
      })
  } catch (e) {
    console.log(e)
  }
}
