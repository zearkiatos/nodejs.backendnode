const express = require("express");
const multer = require('multer');
const responseType = require("../../network/response");
const controller = require("./controller");
const config = require('../../../config');
const router = express.Router();

const upload = multer({
  dest: `public${config.publicRoute}/`,
});
router.get("/", function(request, response) {
  const filterUser = request.query.user || null;
  controller
    .getMessages(filterUser)
    .then(messageList => {
      responseType.success(request, response, messageList, 200);
    })
    .catch(error => {
      responseType.error(request, response, "Unexpected Error", 500, error);
    });
});

router.post("/", upload.single('file'), function(request, response) {
  const { user, message, chat } = request.body;
  const {file} = request;
  controller
    .addMessage(user, message, chat, file)
    .then(fullMessage => {
      responseType.success(request, response, fullMessage, 201);
    })
    .catch(e => {
      responseType.error(
        request,
        response,
        "Invalid information.",
        400,
        "Error into messageController"
      );
    });
});

router.patch("/:id", function(request, response) {
  const { message } = request.body;
  const { id } = request.params;
  controller
    .updateMessage(id, message)
    .then(data => {
      responseType.success(request, response, data, 200);
    })
    .catch(e => {
      responseType.error(request, response, "Internal Error", 500, e);
    });
});

router.delete("/:id", function(request, response) {
  const { id } = request.params;
  controller
    .deleteMessage(id)
    .then(() => {
      responseType.success(request, response, `Message with id ${id} was delete`, 200);
    })
    .catch(e => {
      responseType.error(request, response, "Internal Error", 500, e);
    });
});

module.exports = router;
