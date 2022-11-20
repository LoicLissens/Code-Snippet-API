import pg from 'pg'
import dotenv from 'dotenv'
import knex from 'knex'

// const {Pool} = pg
dotenv.config()
export const db = knex({
  client: 'pg',
  connection: {
    user: 'admin',
    host: '127.0.0.1',
    database: 'code_snippet',
    password: 'admin',
    port: 5432
  }
})

// export const db = new Pool({
//   user: 'admin',
//   host: '127.0.0.1',
//   database: 'code_snippet',
//   password: 'admin',
//   port: 5432,
// })
