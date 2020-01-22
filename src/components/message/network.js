const express = require("express");
const responseType = require("../../network/response");
const controller = require("./controller");
const router = express.Router();
router.get("/", function(request, response) {
  controller.getMessages().then((messageList)=>{
    responseType.success(request, response, messageList, 200);
  }).catch((error)=>{
    responseType.error(request, response, 'Unexpected Error', 500, error);
  })
});

router.post("/", function(request, response) {
  const { user, message } = request.body;
  controller.addMessage(user, message).then((fullMessage)=>{
    responseType.success(request, response, fullMessage, 201);
  }).catch(e=>{
    responseType.error(
        request,
        response,
        "Invalid information.",
        400,
        "Error into messageController"
      );
  });
});

module.exports = router;