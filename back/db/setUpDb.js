require("dotenv").config();
const { db } = require("./init");
const { hashedPass, hashPass } = require("../helpers/hashPassword");
//to refactor ?
const createUsersTable = async () => {
  const name = process.env.user;
  const hashedPass = await hashPass(process.env.password);
  const email = process.env.email;
  const is_admin = process.env.is_admin;
  await db.query(`DROP TABLE IF EXISTS users CASCADE`);

  try {
    await db.query(
      `Create TABLE users(
        ID SERIAL PRIMARY KEY,
        name VARCHAR(50), email VARCHAR(240),
        password VARCHAR(240), is_admin BOOLEAN)`
    );
    console.log("Table users created !");
    await db.query(
      `
        INSERT INTO users (name, password, email, is_admin) VALUES ($1, $2, $3, $4)`,
      [name, hashedPass, email, is_admin]
    );
    console.log(`User ${name} was created !`);
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
      await db.query(`INSERT INTO categories (name, bg_color, text_color)  VALUES ($1, $2, $3)`, ["Javascript", "#f7df1e", "#000000"])
      console.log(`Categories Javascript was created !`);
  } catch (err) {
    console.log(err);
  }
};

const createSnippesTable = async () => {
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


module.exports = {
  createUsersTable,
  createCategoriesTable,
  createSnippesTable
};
