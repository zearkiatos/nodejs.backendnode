const store = require("./store");

function addChat(name) {
  if (!name) {
    return Promise.reject("Invalid request.");
  }
  const user = {
    name
  };
  return store.add(user);
}

function getUsers() {
  return store.list();
}

module.exports = {
  addUser,
  getUsers
};