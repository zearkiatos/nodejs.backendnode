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
        "custom-header":"Nuevo valor customizado"
    })
    responseType.success(request, response,'Lista de Mensajes');
});

router.post('/message', function(request, response){
    console.log(request.query);
    console.log(request.body);
    if(request.query.error == "ok") {
        responseType.error(request, response, 'Error Simulado', 401);
    }
    else {
        responseType.success(request, response,'Creado correctamente.', 201);
    }
})
// app.use('/', function(request, response) {
//     response.send('I am okay ✅🤖');
// });

app.listen(3000, ()=>{
    console.info('Express was init successfully. ✅🚀');
});

console.log('The application is listen in http://localhost:3000 ✅🤖')
