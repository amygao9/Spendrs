var jwt = require('jsonwebtoken');

const getJWT = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });
}

module.exports = { getJWT };
