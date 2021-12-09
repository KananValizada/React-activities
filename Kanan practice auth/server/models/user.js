import mongoose from "mongoose";

const userSchedule = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const user = mongoose.model("user", userSchedule);

export default user;
