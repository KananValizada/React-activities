import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
});

const postModel = mongoose.model("postModel2", postSchema);
export default postModel;
