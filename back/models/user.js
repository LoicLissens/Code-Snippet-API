import chalk from 'chalk'

import { Enum } from './utils.js'

// export const createUsersTable = async (db) => {
//     await db.query('DROP TABLE IF EXISTS users CASCADE')

//     try {
//       await db.query(
//         `Create TABLE users(
//           ID SERIAL PRIMARY KEY,
//           name VARCHAR(50), email VARCHAR(240),
//           password VARCHAR(240), is_admin BOOLEAN)`
//       )
//       console.log('Table users created !')
//     } catch (error) {
//       console.log(error)
//     }
//   }
const UserType = new Enum('admin', 'staff', 'viewer')

export const createUsersTable = async (db) => {
  await db.schema.dropTableIfExists('users')
  try {
    await db.schema
      .createTable('users', table => {
        table.string('id').primary()
        table.string('user_name')
        table.timestamp('created_at').defaultTo(db.fn.now())
        table.string('password')
        table.enum('user_type', [...UserType])
      })
      console.log(chalk.greenBright(`Table users created`))
  } catch (e) {
    console.log(e)
  }
}
class UserModel {
  static classNameCol = 'users'
  static idCol = 'id'
  static nameCol ='name'
  static createdAtCol = 'created_at'
  static passwordCol = 'password'
  static userTypeCol = 'user_type'

   async get(id){
    return await db.from(this.classNameCol).select('*').where(this.idCol,id)
  }
  async save(user){
    userToSave = {[this.nameCol]:user.name,[this.spasswordCol]:user.password,[this.userTypeCol]:user.userType}
    return await db(self.classNameCol).insert(userToSave)
  }
  
}
