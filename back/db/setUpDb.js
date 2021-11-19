require('dotenv').config();
const { db } = require('./init');
const { hashedPass, hashPass } = require('../helpers/hashPassword');
const createUsersTable = () => {
    db.query(
    `Create TABLE users(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(50), email VARCHAR(240),
    password VARCHAR(240), is_admin BOOLEAN)`)
    .then((r) => {
        console.log(r);
    }).catch((e) => {
        console.log(e);
    })
}
const createAdmin = async () => {
    const name = process.env.user;
    const hashedPass = await hashPass(process.env.password);
    const email = process.env.email;
    const is_admin = process.env.is_admin;
   
    db.query(`
        INSERT INTO users (name, password, email, is_admin) VALUES ($1, $2, $3, $4)`,
        [name,hashedPass,email,is_admin]
    ).then((resp) => {
        console.log(resp);
    }).catch((e) => {
        console.log(e);
    })
}
module.exports = {
    createUsersTable,
    createAdmin

}