import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb" }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://nerbeh:kANAN123@cluster0.wxra0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Kanan lotudu");
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log("Server is running "));
  })
  .catch((error) => console.log(error));
