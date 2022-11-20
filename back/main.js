import dotenv from 'dotenv'

import chalk from 'chalk'
import Fastify from 'fastify'

import { INIT_DB } from './db/setUpDb.js'
import { postCategorysRoute, listCategoryRoutes } from './router/api/category.js'


dotenv.config()
const PORT = 8080

if (process.argv.slice(2).includes("init-db")) {
  (async () => {
    await INIT_DB()
  })()
}

const fastify = Fastify({
  logger: true
})

fastify.register(listCategoryRoutes, postCategorysRoute)

const start = async () => {
  try {
    await fastify.listen({ port: PORT })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
console.log(chalk.blue(`Running on ${PORT}`))

