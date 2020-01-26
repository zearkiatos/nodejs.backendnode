const store = require("./store");

function addChat(chat) {
  if (!chat.users) {
    return Promise.reject("Invalid request.");
  }
  return store.add(chat);
}

function getChats() {
  return store.list();
}

module.exports = {
  addChat,
  getChats
};
