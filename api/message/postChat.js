// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors"); // Add this line

// const app = express();

// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500", // Or wherever your client is served from
//     credentials: true, // Allow cookies
//   })
// );
// app.use(cookieParser()); // And this line
// app.use(bodyParser.json()); // Add this line

// // Connect to MongoDB
// const url =
//   "mongodb+srv://syamilu:asdfasdf@webtech01.yxq2azw.mongodb.net/webtech01?retryWrites=true&w=majority";
// mongoose.connect(url);

// // Define a schema
// const MessageSchema = new mongoose.Schema({
//   username: String,
//   message: String,
//   timestamp: Date,
// });

// // Create a model
// const Message = mongoose.model("Message", MessageSchema);

// // Handle POST requests to /message
// app.post("/message", async (req, res) => {
//   console.log("Username from cookies:", req.body.username); // Log username
//   console.log("Message from client:", req.body.usermsg); // Log message

//   const newMessage = new Message({
//     username: req.body.username, // get username from cookies
//     message: req.body.usermsg,
//     timestamp: new Date(), // set timestamp to current date and time
//   });

//   try {
//     await newMessage.save();
//     res.status(200).json({ message: "Message saved!" });
//   } catch (err) {
//     res.status(500).json({ error: err.toString() });
//   }
// });

// app.listen(3000, () => console.log("Server started on port 3000"));

// api/message/postChat.js
const mongoose = require("mongoose");
const cors = require("cors"); // Add this line
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Connect to MongoDB
const url =
  "mongodb+srv://syamilu:asdfasdf@webtech01.yxq2azw.mongodb.net/webtech01?retryWrites=true&w=majority";
mongoose.connect(url);

// Define a schema
const MessageSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: Date,
});

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
