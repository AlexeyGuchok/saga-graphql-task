const Sequelize = require("sequelize");
const db = require("../database/db");

const Dealer = db.define("dealers", {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
  },
  age: {
    type: Sequelize.NUMBER,
  },
});

module.exports = Dealer;
