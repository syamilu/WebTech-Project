const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://syamilu:asdfasdf@webtech01.yxq2azw.mongodb.net/?retryWrites=true&w=majority";

// Connect to your Atlas cluster
const client = new MongoClient(url);

const dbName = "webtech01";

async function run() {
  try {
    await client.connect();
    const db = client.db(dbName);

    const col = db.collection("chat");

    let chat = {
      name: "xy7ELdFKnd!",
      message: "KJSBADHBSAHDBSAHBDHASBDBSAHD jbSBDHBASHDBSABDHSBHD",
      timestamp: new Date(),
    };

    const p = await col.insertOne(chat);
    const myDoc = await col.find().toArray();
    console.log("Document found:\n" + JSON.stringify(myDoc));
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
