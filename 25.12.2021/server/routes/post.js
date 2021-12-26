import express from "express";
import { fetchPosts, createPosts, deletePost } from "../controller/post.js";

const router = express.Router();

router.get("/", fetchPosts);
router.post("/", createPosts);
router.delete("/:id", deletePost);

export default router;
