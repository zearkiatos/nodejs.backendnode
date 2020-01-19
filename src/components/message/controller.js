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
          console.log(fullMessage);
          resolve(fullMessage);
    })
}

module.exports = {
  addMessage
};
