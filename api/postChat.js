// api/postChat.js
const mongoose = require("mongoose");
const url =
  "mongodb+srv://syamilu:asdfasdf@webtech01.yxq2azw.mongodb.net/webtech01?retryWrites=true&w=majority";
mongoose.connect(url);

// Define a schema
const MessageSchema = new mongoose.Schema(
  {
    username: String,
    message: String,
    timestamp: Date,
  },
  { collection: "messages" }
);

// Create a model
const Message = mongoose.model("Message", MessageSchema);

module.exports = async (req, res) => {
  // Handle POST requests to /message
  console.log("Username from cookies:", req.body.username); // Log username
  console.log("Message from client:", req.body.usermsg); // Log message

  const newMessage = new Message({
    username: req.body.username, // get username from cookies
    message: req.body.usermsg,
    timestamp: new Date(), // set timestamp to current date and time
  });

  try {
    await newMessage.save();
    res.status(200).json({ message: "Message saved!" });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};
