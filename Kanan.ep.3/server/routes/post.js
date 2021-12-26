import express from "express";
import {
  fetchPosts,
  createPost,
  getPost,
  updatePost,
  likePost,
} from "../controller/post.js";

const router = express.Router();

router.get("/", fetchPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.get("/:id/likePost", likePost);

export default router;
