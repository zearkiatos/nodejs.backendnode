const express = require("express");
const logger = require("morgan");
const cors = require('cors');
const bodyParser = require("body-parser");
const socket = require('./socket');
const router = require("./src/network/routes");
const app = express();
const server = require('http').Server(app);
const config = require('./config')
const db = require("./db");

db(
  config.dbUrl
);
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server.listen(config.port, () => {
  console.info("Express was init successfully. ✅🚀");
});

app.use(config.publicRoute, express.static("public"));

console.log(`The application is listen in ${config.host}:${config.port} ✅🤖`);

socket.connect(server);

router(app);
