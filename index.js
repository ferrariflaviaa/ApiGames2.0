const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const userController = require("./src/controller/user/userController");
const connection = require("./src/database/database")
const cors = require("cors")
const Users = require("./src/model/users/Users")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors())
app.use("/games", userController)

app.listen(8080, () => {
  console.log("API RODANDO!!")
})