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
