const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/nextjs-blog", {
  logging: false,
});

module.exports = db;
