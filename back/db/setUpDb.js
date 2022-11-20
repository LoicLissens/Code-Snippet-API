import dotenv from 'dotenv'

import chalk from 'chalk'

import { db } from '../db/init.js'
import { createCategoriesTable, createUsersTable, createSnippetsTable, createCategoriesSnippetsTable } from '../models/index.js'

dotenv.config()

export const INIT_DB = async () => {
  try {
    await Promise.all([createUsersTable(db), createCategoriesTable(db), createSnippetsTable(db)])
    await Promise.all([createCategoriesTable(db)])
    console.log(chalk.green('DB succesfully init !!!'))
  } catch (e) {
    console.log(chalk.red(e))
  }
}
