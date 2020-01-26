const store = require("./store");
function addMessage(user, message, chat, file) {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.error("[messageController] User or message was not set.");
      reject("The data is incorrect.");
      return false;
    }
    console.log(file);
    let fileUrl = '';
    if(file) {
      fileUrl = 'http://localhost:3000/app/files/'+file.filename;
    }
    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
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

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("Invalid request data");
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
