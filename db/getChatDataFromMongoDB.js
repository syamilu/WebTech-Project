const { MongoClient } = require("mongodb");

async function getChatDataFromMongoDB() {
  const url =
    "mongodb+srv://syamilu:asdfasdf@webtech01.yxq2azw.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  try {
    await client.connect();
    const database = client.db("webtech01");
    const collection = database.collection("chat");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chatData = await collection
      .find({ timestamp: { $gte: today } })
      .sort({ timestamp: 1 })
      .toArray();

    return chatData;
  } finally {
    await client.close();
  }
}

module.exports = getChatDataFromMongoDB;
