const express = require('express');
const router = express.Router();
const logger = require('morgan');
const bodyParser = require('body-parser');
const responseType = require('./src/network/response');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function(request, response){
    console.log(request.headers);
    response.header({
        "custom-header":"New customice values."
    })
    responseType.success(request, response,'Message List');
});

router.post('/message', function(request, response){
    console.log(request.query);
    console.log(request.body);
    if(request.query.error == "ok") {
        responseType.error(request, response, 'Error unexpected.', 500, 'Es solo una simulación de los errores');
    }
    else {
        responseType.success(request, response,'Correct Response.', 201);
    }
})
// app.use('/', function(request, response) {
//     response.send('I am okay ✅🤖');
// });

app.listen(3000, ()=>{
    console.info('Express was init successfully. ✅🚀');
});

app.use('/app',express.static('public'));

console.log('The application is listen in http://localhost:3000 ✅🤖')
