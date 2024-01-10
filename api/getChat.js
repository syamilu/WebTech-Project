// api/getChat.js
const { MongoClient } = require("mongodb");

let collection;

const url =
  "mongodb+srv://syamilu:asdfasdf@webtech01.yxq2azw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

module.exports = async (req, res) => {
  try {
    if (!collection) {
      await client.connect();
      const database = client.db("webtech01");
      collection = database.collection("messages");
      await collection.createIndex({ timestamp: 1 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chatData = await collection
      .find({ timestamp: { $gte: today } })
      .toArray();

    res.status(200).json(chatData);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching chat data" });
  }
};

// module.exports = async (req, res) => {
//   try {
//     const chatData = await getChat();
//     res.json(chatData);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching chat data" });
//   }
// };

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
