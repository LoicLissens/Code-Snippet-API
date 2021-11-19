const { Pool} = require('pg')

const db = new Pool({
  user: 'user',
  host: 'db',
  database: 'postgres',
  password: 'pass',
  port: 5432,
   })
module.exports = {
  db
}