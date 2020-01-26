const store = require("./store");

function addUser(name) {
  if (!name) {
    return Promise.reject("Invalid request.");
  }
  const user = {
    name
  };
  return store.add(user);
}

function getUsers() {
  return store.lists();
}

module.exports = {
  addUser,
  getUsers
};
