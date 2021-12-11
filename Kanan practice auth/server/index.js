// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();

// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello from Kanan");
// });
// const CONNECTION_URL =
//   "mongodb+srv://nerbeh:kANAN123@cluster0.wxra0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const PORT = process.env.PORT || 6000;

// // app.get("/", (req, res) => res.send("Kananana"));

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => console.log(error.message));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routers/auth.js";
import messageRouter from "./routers/message.js";
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/message", messageRouter);
app.use("/", authRouter);
app.get("/", (req, res) => {
  res.send("Hello from KananIIIII");
});

const CONNECTION_URL =
  "mongodb+srv://nerbeh:kANAN123@cluster0.wxra0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 7000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
