require("dotenv").config();
const { db } = require("./init");
const { hashedPass, hashPass } = require("../helpers/hashPassword");
const chalk = require("chalk")


const createUsersTable = async () => {

  await db.query(`DROP TABLE IF EXISTS users CASCADE`);

  try {
    await db.query(
      `Create TABLE users(
        ID SERIAL PRIMARY KEY,
        name VARCHAR(50), email VARCHAR(240),
        password VARCHAR(240), is_admin BOOLEAN)`
    );
    console.log("Table users created !");
   
  } catch (error) {
    console.log(error);
  }
};

const createCategoriesTable = async () => {
await db.query(`DROP TABLE IF EXISTS categories CASCADE`);
  try {
    await db.query(
     `Create TABLE categories(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE, bg_color VARCHAR(50),
    text_color VARCHAR(240))`
    )
      console.log("Table categories created !");
  } catch (err) {
    console.log(err);
  }
};

const createSnippetsTable = async () => {
  await db.query(`DROP TABLE IF EXISTS snippets CASCADE`)
  try {
    await db.query(`Create TABLE snippets(
        ID SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(250)NOT NULL,
    created_at TIMESTAMP NOT NULL,
    firebase_path VARCHAR(250) NOT NULL,
    code VARCHAR(250),
    backup_path VARCHAR(250)
    )`)
    console.log("Table Snippets created !");
    
  } catch (e) {
    console.log(err);
  }
}

const createCategoriesSnippetsTable = async () => {
  await db.query(`DROP TABLE IF EXISTS categories_snippets CASCADE`)
  try {
    await db.query(`CREATE TABLE categories_snippets (
    "id" serial NOT NULL PRIMARY KEY,
    "snippet_id" integer NOT NULL REFERENCES "snippets" ("id") DEFERRABLE INITIALLY DEFERRED,
    "categorie_id" integer NOT NULL REFERENCES "categories" ("id") DEFERRABLE INITIALLY DEFERRED)`)
    console.log("Table categories_snippets created !");
    
  } catch (e) {
    console.log(err);
  }

}

const POPULATE_DB = async () => {
  const name = process.env.user;
  const hashedPass = await hashPass(process.env.password);
  const email = process.env.email;
  const is_admin = process.env.is_admin;
  try {
     await db.query(
      `
        INSERT INTO users (name, password, email, is_admin) VALUES ($1, $2, $3, $4)`,
      [name, hashedPass, email, is_admin]
    );
    console.log(`User ${name} was created !`);
    const cat1 = await db.query(`INSERT INTO categories (name, bg_color, text_color)  VALUES ($1, $2, $3) RETURNING id`, ["Javascript", "#f7df1e", "#000000"])
    const idCat1 = cat1.rows[0].id
    console.log(`Categories Javascript was created !`);
    const cat2 = await db.query(`INSERT INTO categories (name, bg_color, text_color)  VALUES ($1, $2, $3) RETURNING id`, ["Python", "#ffdf91", "#eaac7f"])
    const idCat2 = cat2.rows[0].id
    console.log(`Categories Python was created !`);
    const snippet1 = await db.query(` INSERT INTO snippets (name, description ,created_at, firebase_path) VALUES ('Serveur','Launch a serveur in JS', NOW(),'wwww.lol.com') RETURNING id`)
    const idSnippet1 = snippet1.rows[0].id
    await db.query(`INSERT INTO categories_snippets (snippet_id, categorie_id) VALUES ($1,$2),($1,$3)`,[idSnippet1,idCat1,idCat2])
    console.log(chalk.green("DB SUCCESFULLY POPULATE !!!"));
  } catch (e) {
    console.log(chalk.red(e));
  }
}

const INIT_DB = async () => {
  try {
    await Promise.all([createUsersTable(), createCategoriesTable(), createSnippetsTable()])
    await createCategoriesSnippetsTable()
    console.log(chalk.green('DB succesfully init !!!'))
  } catch (e) {
    console.log(chalk.red(e));
  }
}

module.exports = {
  INIT_DB,
  POPULATE_DB
};
