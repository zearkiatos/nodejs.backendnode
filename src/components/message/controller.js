const store = require('./store');
function addMessage(user, message) {

    return new Promise((resolve, reject)=>{
        if(!user || !message) {
            console.error('[messageController] User or message was not set.');
            reject('The data is incorrect.');
            return false;
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
          };
          store.add(fullMessage);
          resolve(fullMessage);
    })
}

function getMessages() {
  return new Promise((resolve,reject)=>{
    resolve(store.list());
  });
}

module.exports = {
  addMessage,
  getMessages
};
