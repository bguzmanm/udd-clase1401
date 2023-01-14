const { expressjwt: jwt } = require("express-jwt");

require("dotenv").config();

const getToken = (req) => {
  let { authorization } = req.headers;
  if (authorization) {
    let [type, token] = authorization.split(" ");
    return (type === 'Token' || type === "Bearer") ? token : null;
  }
  return null;
}

const auth = jwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "user",
  getToken
});


module.exports = auth;