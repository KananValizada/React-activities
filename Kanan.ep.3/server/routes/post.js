import express from "express";

const router = express.Router();

router.get("/", fetchPosts());

export default router;
