const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = require("./src/network/routes");
const app = express();
const db = require("./db");

db(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.info("Express was init successfully. ✅🚀");
});

app.use("/app", express.static("public"));

console.log("The application is listen in http://localhost:3000 ✅🤖");
router(app);
