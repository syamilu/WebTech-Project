// const express = require("express");
// const app = express();
// const cors = require("cors");
// const getChatDataFromMongoDB = require("../../db/getChatDataFromMongoDB");
// app.use(cors());

// app.get("/getChat", async (req, res) => {
//   const chatData = await getChatDataFromMongoDB();
//   res.json(chatData);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

// api/getChat.js
const getChatDataFromMongoDB = require("../../db/getChatDataFromMongoDB");

module.exports = async (req, res) => {
  const chatData = await getChatDataFromMongoDB();
  res.json(chatData);
};
