import bcrypt from 'bcrypt'

export const hashPass = (plainTextPass) => {
  const saltRounds = 10
  return bcrypt.hash(plainTextPass, saltRounds)
}

export const comparePass = (plainTextPass, hashedPAss) => {
  return bcrypt.compare(plainTextPass, hashedPAss)
}
