import mongoose from "mongoose";

const postScheme = mongoose.Schema({
  title: String,
  message: String,
});

const postModel = mongoose.model("PostModel", postScheme);

export default postModel;
