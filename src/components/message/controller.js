const store = require("./store");
function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] User or message was not set.");
      reject("The data is incorrect.");
      return false;
    }
    const fullMessage = {
      user,
      message,
      date: new Date()
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid request data");
      return false;
    }
    const result = await store.update(id, message);

    resolve(result);
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage
};
