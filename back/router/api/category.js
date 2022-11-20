import { db } from '../../db/init.js'

export const listCategoryRoutes = async (fastify, options) => {
  fastify.get('/api/categories', async (req, resp) => {
    try {
      await db
        .query(
                    `
          SELECT * FROM categories`
        )
        .then((r) => {
          console.log(r.rows)
          return r.rows
        })
    } catch (e) {
      console.error(e)
      return { Error: 'Unable to find any categories' }
    }
  })
}
export const postCategorysRoute = async (fastify, options) => {
  fastify.post('/api/categorie', (req, resp) => {
    const { name, bgColor, textColor } = req.body

    db.query('INSERT INTO categories (name, bg_color, text_color)  VALUES ($1, $2, $3)', [name, bgColor, textColor])
      .then((r) => {
        console.log(`Categorie ${name} was added to the DB !`)
        resp.json({ name, bgColor, textColor })
      }).catch((e) => {
        resp.json({ error: e.detail })
      })
  })
}
