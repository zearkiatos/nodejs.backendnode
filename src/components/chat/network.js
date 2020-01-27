const express = require("express");
const responseType = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", function(request, response) {
  const { users } = request.body;
  controller
    .addChat(users)
    .then(data => {
      responseType.success(request, response, data, 201);
    })
    .catch(error => {
      responseType.error(request, response, "Internal error", 500, error);
    });
});

router.get("/:userId", function(request, response) {
  const {userId} = request.params;
  controller
    .getChats(userId)
    .then(data => {
      responseType.success(request, response, data, 200);
    })
    .catch(error => {
      responseType.error(request, response, "Internal error", 500, error);
    });
});

module.exports = router;
