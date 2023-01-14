const jwt = require("jsonwebtoken");

require("dotenv").config();

const getToken = (username) => {
  return jwt.sign({
    sub: username,
  }, process.env.SECRET);
}

const validateToken = (token) => {
  return jwt.validateToken(token, process.env.SECRET);
}

module.exports = { getToken, validateToken };
