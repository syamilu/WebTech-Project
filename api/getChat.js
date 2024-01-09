// // const express = require("express");
// // const app = express();
// // const cors = require("cors");
// // const getChatDataFromMongoDB = require("../../db/getChatDataFromMongoDB");
// // app.use(cors());

// // app.get("/getChat", async (req, res) => {
// //   const chatData = await getChatDataFromMongoDB();
// //   res.json(chatData);
// // });

// // app.listen(3000, () => console.log("Server running on port 3000"));

// // api/getChat.js
// const getChatDataFromMongoDB = require("../db/getChatDataFromMongoDB");

// module.exports = async (req, res) => {
//   const chatData = await getChatDataFromMongoDB();
//   res.json(chatData);
// };

const { MongoClient } = require("mongodb");

async function getChat() {
  const url =
    "mongodb+srv://syamilu:asdfasdf@webtech01.yxq2azw.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  try {
    await client.connect();
    const database = client.db("webtech01");
    const collection = database.collection("messages");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chatData = await collection
      .find({ timestamp: { $gte: today } })
      .toArray();

    return chatData;
  } finally {
    await client.close();
  }
}

module.exports = async (req, res) => {
  const chatData = await getChat();
  res.json(chatData);
};
