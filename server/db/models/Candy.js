const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://m.media-amazon.com/images/I/61fdfNGbIkS._AC_SY580_.jpg",
  },
});
