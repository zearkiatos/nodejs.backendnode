const statusMessage = {
  "200": "Done",
  "201": "Created",
  "400": "Invalid Format",
  "500": "Internal Error"
};
exports.success = function(request, response, message, status) {
  let statusCode = status;
  let statusMessage = message;
  if (!status) {
    status = 200;
  }
  if (!message) {
      statusMessage = statusMessage[status];
  }
  response.status(statusCode).send({
    error: "",
    body: message
  });
};

exports.error = function(request, response, message, status, details) {
  console.error(`[Response Error] ${details}`);
  let statusCode = status;
  let statusMessage = message;
  if (!status) {
    status = 500;
  }
  if (!message) {
      statusMessage = statusMessage[status];
  }
  response.status(statusCode).send({
    error: message,
    body: ""
  });
};
