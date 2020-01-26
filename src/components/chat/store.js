const Model = require("./model");

function addChat(chat) {
  const newChat = new Model(chat);
  console.log(newChat);
  return newChat.save();
}

async function getChats() {
  return new Promise((resolve, reject) => {
    Model.find()
      .populate("users")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: getChats
};
