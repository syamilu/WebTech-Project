const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser"); // Add this line

const app = express();

app.use(cookieParser()); // And this line
app.use(bodyParser.json()); // Add this line

// Connect to MongoDB
const url =
  "mongodb+srv://syamilu:asdfasdf@webtech01.yxq2azw.mongodb.net/webtech01?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const MessageSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: Date,
});

// Create a model
const Message = mongoose.model("Message", MessageSchema);

// Handle POST requests to /message
app.post("/message", async (req, res) => {
  console.log("Username from cookies:", req.cookies.username); // Log username
  console.log("Message from body:", req.body.usermsg); // Log message

  const newMessage = new Message({
    username: req.cookies.username, // get username from cookies
    message: req.body.usermsg,
    timestamp: new Date(), // set timestamp to current date and time
  });

  try {
    await newMessage.save();
    res.status(200).send("Message saved!");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => console.log("Server started on port 3000"));
