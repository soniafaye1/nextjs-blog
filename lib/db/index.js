const db = require("./db");
const Post = require("./Post");
const Comment = require("./Comment");

Comment.belongsTo(Post);
Post.hasMany(Comment);

module.exports = {
  db,
  Post,
  Comment,
};
