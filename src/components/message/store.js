const db = require("mongoose");
const Model = require("./model");
require("dotenv").config({ path: "./db.env" });
db.Promise = global.Promise;
db.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
  `,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.info("[db] Connect Successfully. ✅🟢");
});

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findOne({ _id: id });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage
  //get
  //update
  //delete
};
