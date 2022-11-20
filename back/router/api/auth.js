import jwt from 'jsonwebtoken'
import { comparePass } from './helpers/hashPassword.js'

const authentificateToken = (req, resp, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return resp.sendStatus(401)
  jwt
    .verify(token, process.env.ACCESS_TOKEN_SECRET)
    .then((user) => {
      req.user = user
    })
    .catch((err) => {
      return resp.sendStatus(403)
    })
}
const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
}
fastify.post('/api/login', (req, resp) => {
  const { user, password } = req.body
  accessToken = generateAccessToken(user)
  resp.json({ accessToken })
  db.query(
      `
      SELECT * FROM categories WHERE name = $1`,
      [user]
  )
    .then((data) => {
      const userData = data.rows[0]
      comparePass(password, userData.password).then((result) => {
        console.log(result)
      })
    })
    .catch((e) => console.error('lol'))
})
