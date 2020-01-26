const express = require("express");
const responseType = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post('/', function(request, response){
    const {name} = request.body;
    controller.addUser(name).then(data =>{
        responseType.success(request, response,data, 200);
    }).catch(error =>{
        responseType.error(request, response, 'Internal error', 500, error)
    });
});

module.exports = router;