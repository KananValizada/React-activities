import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/post.js";
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://nerbeh:kANAN123@cluster0.wxra0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("ok");
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(PORT)))
  .catch((error) => {
    console.log(error);
  });
