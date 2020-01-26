const Model = require("./model");

function addChat(chat) {
  const newChat = new Model(chat);
  return newChat.save();
}

async function getChats() {
  const chats = await Model.find();
  return chats;
}

module.exports = {
  add: addChat,
  list: getChats
};