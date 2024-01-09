const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

let collection;

async function getChat() {
  try {
    if (!collection) {
      await client.connect();
      const database = client.db("webtech01");
      collection = database.collection("messages");
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chatData = await collection
      .find({ timestamp: { $gte: today } })
      .toArray();

    return chatData;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = async (req, res) => {
  try {
    const chatData = await getChat();
    res.json(chatData);
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching chat data" });
  }
};
