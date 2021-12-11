import express from "express";
import auth from "../middleware/auth.js";
import { getMessages, createMessage } from "../controller/message.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", auth, createMessage);

export default router;
