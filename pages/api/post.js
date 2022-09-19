export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}

const router = require("express").Router();
const Post = require("../../lib/db/Post");

router.get("api/post", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.post("api/post", async (req, res, next) => {});

module.exports = router;
