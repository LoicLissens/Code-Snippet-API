const bcrypt = require("bcrypt");

const hashPass = (plainTextPass) => {
  const saltRounds = 10;
  return bcrypt.hash(plainTextPass, saltRounds);
};

const comparePass = (plainTextPass, hashedPAss) => {
  return bcrypt.compare(plainTextPass, hashedPAss);
};

module.exports = {
  hashPass,
  comparePass,
};
