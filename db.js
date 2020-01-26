const db = require("mongoose");
require("dotenv").config({ path: "./db.env" });
db.Promise = global.Promise;
async function connect(url) {
  await db
    .connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.info("[db] Connect Successfully. ✅🟢");
    });
}

module.exports = connect;
