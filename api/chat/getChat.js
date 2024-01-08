// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const getChatDataFromMongoDB = require("../../db/getChatDataFromMongoDB");
app.use(cors());

app.get("/getChat", async (req, res) => {
  const chatData = await getChatDataFromMongoDB(); // Replace this with your actual function to get chat data
  res.json(chatData);
});

app.listen(3000, () => console.log("Server running on port 3000"));
