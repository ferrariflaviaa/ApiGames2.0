const jwt = require("jsonwebtoken");
const JWTSecret = 'mdokremokmeokmdkemdkoemdko';

function adminAuth(req, res, next){
 const authToken = req.headers['authorization']
 console.log("authToken", authToken)
 if(authToken != undefined){
  const bearer = authToken.split(' ');
  let token = bearer[1];
  jwt.verify(token, JWTSecret,(err, data)=> {
    if(err){
      res.status(401);
      res.json({err: "Token inválido!"})
    }else{
      req.token = token;
      req.looggedUser = {id: data.id , email: data.email}
      next()
    }
  })

 }
}



module.exports = adminAuth