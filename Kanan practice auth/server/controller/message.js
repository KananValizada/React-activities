import Message from "../models/message.js";
import auth from "../middleware/auth.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMessage = async (req, res) => {
  const message = req.body;

  const newMessage = new Message({
    ...message,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
