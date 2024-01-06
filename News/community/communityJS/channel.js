const client = StreamChat.getInstance("sfgt26gnwf53");
const channel = client.channel("messaging", "jsdevs-3", {
  // add as many custom fields as you'd like
  name: "Talk about JS",
});

const state = await channel.watch();
