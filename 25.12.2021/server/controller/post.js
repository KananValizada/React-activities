import PostModel from "../models/post.js";
import mongoose from "mongoose";

export const fetchPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post);
  try {
    await newPost.save();

    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ message: "not found" });

  try {
    await PostModel.findByIdAndRemove(id);

    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
