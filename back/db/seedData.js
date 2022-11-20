const { hashPass } = require('../helpers/hashPassword')

const POPULATE_DB = async () => {
  const name = process.env.user
  const hashedPass = await hashPass(process.env.password)
  const email = process.env.email
  const is_admin = process.env.is_admin
  try {
    await db.query(
        `
          INSERT INTO users (name, password, email, is_admin) VALUES ($1, $2, $3, $4)`,
        [name, hashedPass, email, is_admin]
    )
    console.log(`User ${name} was created !`)
    const cat1 = await db.query('INSERT INTO categories (name, bg_color, text_color)  VALUES ($1, $2, $3) RETURNING id', ['Javascript', '#f7df1e', '#000000'])
    const idCat1 = cat1.rows[0].id
    console.log('Categories Javascript was created !')
    const cat2 = await db.query('INSERT INTO categories (name, bg_color, text_color)  VALUES ($1, $2, $3) RETURNING id', ['Python', '#ffdf91', '#eaac7f'])
    const idCat2 = cat2.rows[0].id
    console.log('Categories Python was created !')
    const snippet1 = await db.query(' INSERT INTO snippets (name, description ,created_at, firebase_path) VALUES (\'Serveur\',\'Launch a serveur in JS\', NOW(),\'wwww.lol.com\') RETURNING id')
    const idSnippet1 = snippet1.rows[0].id
    await db.query('INSERT INTO categories_snippets (snippet_id, categorie_id) VALUES ($1,$2),($1,$3)', [idSnippet1, idCat1, idCat2])
    console.log(chalk.green('DB SUCCESFULLY POPULATE !!!'))
  } catch (e) {
    console.log(chalk.red(e))
  }
}
