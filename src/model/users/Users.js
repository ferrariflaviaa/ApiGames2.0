const { DataTypes } = require('sequelize')
const connection = require("../../database/database")

const Users = connection.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Users.sync({ force: false }).then(() => {})

module.exports = Users;