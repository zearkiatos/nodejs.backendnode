const express = require('express');
const responseType = require('../../network/response');
const router = express.Router();
router.get('/', function(request, response){
    console.log(request.headers);
    response.header({
        "custom-header":"New customice values."
    })
    responseType.success(request, response,'Message List');
});

router.post('/', function(request, response){
    console.log(request.query);
    console.log(request.body);
    if(request.query.error == "ok") {
        responseType.error(request, response, 'Error unexpected.', 500, 'Es solo una simulación de los errores');
    }
    else {
        responseType.success(request, response,'Correct Response.', 201);
    }
})

module.exports = router;