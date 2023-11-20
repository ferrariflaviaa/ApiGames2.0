const express = require("express");
const router = express.Router();
const User = require("../../model/users/Users");
const jwt = require("jsonwebtoken");
// const adminAuth = require("../../middlware/adminAuth");

const JWTSecret = 'mdokremokmeokmdkemdkoemdko';

router.post('/auth', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    User.findOne({ where: { email } }).then(user => {
      if (user !== undefined) {
        if (user.password == password) {
          // res.status(200).json({  id: user.id, email: user.email});
          jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '48h' }, (err, token) => {
            if (err) {
              res.status(400).json({ err: "Falha na geração do token" });
            } else {
              res.status(200).json({ token: token,  id: user.id, email: user.email});
            }
          });
        } else {
          res.status(401).json({ err: "Senha incorreta" });
        }
      } else {
        res.send()
        res.status(404).json({ err: "E-mail não encontrado" });
      }
    });
  } else {
    res.status(400).json({ err: "E-mail e/ou senha não especificados" });
  }
});

module.exports = router
