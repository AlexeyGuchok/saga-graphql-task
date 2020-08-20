const Sequelize = require("sequelize");
const db = require("../database/db");

const Product = db.define("products", {
  id: {
    type: Sequelize.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  model_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model_id: {
    type: Sequelize.TEXT("tiny"),
  },
  model_category: {
    type: Sequelize.TEXT("tiny"),
  },
  model_price: {
    type: Sequelize.NUMBER,
  },
  model_description: {
    type: Sequelize.STRING,
  },
  model_size: {
    type: Sequelize.TEXT("tiny"),
  },
  model_color: {
    type: Sequelize.TEXT("tiny"),
    defaultValue: "user",
  },
  createdBy: {
    type: Sequelize.NUMBER,
  },
});

module.exports = Product;
