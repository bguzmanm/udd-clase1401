const user = require("../models/user.model");
const jwt = require("../auth/jwt");


const signin = async (req, res) => {
  try {
    const filter = {
      username: req.body.username,
      // password: req.body.password,
      active: true
    }
    const u = await user.findOne(filter);
    if (u && u?.validPassword(req.body.password)) {
      return res.json({
        msg: "ok",
        token: jwt.getToken(req.body.username)
      });
    } else {
      console.warn("intengo de ingreso no autorizaado!! ");
      return res.status(401).json({
        msg: "unauthorized",
        details: "this user is not authorized for this endpoint"
      })
    }
  } catch (error) {
    return res.json({
      msg: "error en autenticación",
      details: error.message()
    })
  }
}

const findAll = async (req, res) => {
  try {
    const users = await user.find();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({
      "msg": "error 500, entre el teclado y el asiento, del/a desarrollador/a",
      "details": error.message
    })
  }
}

const signup = async (req, res) => {
  try {

    const u = new user(req.body);
    u.hashPassword(req.body.password);
    const result = await user.create(u);
    return res.json({
      "msg": "usuario creado",
      "details": result
    });
  } catch (error) {
    return res.status(500).json({
      "msg": "error 500, entre el teclado y el asiento, del/a desarrollador/a",
      "details": error.message
    });
  }
}

const findOne = async (req, res) => {
  return res.json(Promise.resolve({ uno: "uno" }));
}

module.exports = { findAll, findOne, signup, signin };