const Sequelize = require("sequelize");
const db = require("./db");

const Comment = db.define("comments", {
  date: {
    type: Sequelize.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  content: {
    type: Sequelize.TEXT,
    defaultValue: "",
  },
});

module.exports = Comment;
