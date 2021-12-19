import mongoose from "mongoose";

const postScheme = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  createdAt: {
    type: String,
    default: new Date(),
  },
});

const postModel = mongoose.model("PostModel", postScheme);

export default postModel;
