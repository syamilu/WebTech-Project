// yarn add stream-chat
import { StreamChat } from "stream-chat";
// if you're using common js
const StreamChat = require("stream-chat").StreamChat;

// instantiate your stream client using the API key and secret
// the secret is only used server side and gives you full access to the API
// find your API keys here https://getstream.io/dashboard/
const serverClient = StreamChat.getInstance(
  "sfgt26gnwf53",
  "t46bzgka76ze6thqppbxmjxx98ppc9ru6a48pb3un93ah734esuxpsm2csydt6sr"
);

// generate a token for the user with id 'john'
const token = serverClient.createToken("john");
// next, hand this token to the client in your in your login or registration response

// instantiate a new client (client side)
const client = StreamChat.getInstance("sfgt26gnwf53");

await client.connectUser(
  {
    id: "john",
    name: "John Doe",
    image: "https://bit.ly/3jXfCgN",
  },
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYW5jaWVudC1ncmFzcy0zIn0.Xlgpsz6LSo4nQdIENom-nV_RIVDlXWGnhtkFGh6fwC4"
);
