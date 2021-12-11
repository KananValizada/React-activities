import mongoose from "mongoose";

const messageSchedule = mongoose.Schema({
  title: String,
  content: String,
  creator: String,
  createdAt: { type: Date, default: new Date() },
});

const message = mongoose.model("message", messageSchedule);

export default message;
