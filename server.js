const express = require("express");
const logger = require("morgan");
const cors = require('cors');
const bodyParser = require("body-parser");
const socket = require('./socket');
const router = require("./src/network/routes");
const app = express();
const server = require('http').Server(app);
const db = require("./db");

db(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
);
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server.listen(3000, () => {
  console.info("Express was init successfully. ✅🚀");
});

app.use("/app", express.static("public"));

console.log("The application is listen in http://localhost:3000 ✅🤖");

socket.connect(server);

router(app);
