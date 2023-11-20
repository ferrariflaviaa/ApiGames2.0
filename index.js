const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./src/database/database")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors())

app.listen(8080, () => {
  console.log("API RODANDO!!")
})