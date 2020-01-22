const db = require("mongoose");
const Model = require("./model");
require("dotenv").config({ path: "./db.env" });
db.Promise = global.Promise;
db.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
    console.info('[db] Connect Successfully. ✅🟢');
});

//mongodb+srv://root:<password>@cluster0-aabdq.azure.mongodb.net/test?retryWrites=true&w=majority

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

function getMessages() {
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessages
  //get
  //update
  //delete
};
