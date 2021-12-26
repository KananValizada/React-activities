import postModel from "../models/post.js";
import mongoose from "mongoose";

export const fetchPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  console.log(post);
  const newPost = new postModel(post);

  try {
    await newPost.save();
    res.status(201).json({ newPost });
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postModel.findById(id);
    res.status(201).json({ post });
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`noyhing has found with id: ${id}`);

  const updatedPost = { title, message, _id: id };

  await postModel.findByIdAndUpdate(id, updatedPost, { new: true });
};

export const likePost = async (req, res) => {
  const id = req.params;
};
