const { db } = require("./lib/db");
const Post = require("./lib/db/Post");
const Comment = require("./lib/db/Comment");

const seed = async () => {
  const posts = [
    {
      id: 1,
      title: "When to Use Static Generation v.s. Server-side Rendering",
      author: "sonia",
      date: "2022-09-15",
      content: "This is blog entry number 1",
    },
    {
      id: 2,
      title: "Two Forms of Pre-rendering",
      author: "sonia",
      date: "2022-09-16",
      content: "This is blog entry number 2",
    },
  ];

  const comments = [
    {
      id: 1,
      date: "2022-09-15",
      author: "Meryl Streep",
      content: "Wow",
    },
    {
      id: 2,
      date: "2022-09-16",
      author: "George Clooney",
      content: "Amazing",
    },
  ];

  try {
    await db.sync({ force: true });
    await Promise.all(posts.map((post) => Post.create(post)));
    await Promise.all(comments.map((comment) => Comment.create(comment)));
  } catch (error) {
    return error;
  }
};

module.exports = seed;
