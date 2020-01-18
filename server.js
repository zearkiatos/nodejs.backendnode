const express = require('express');
const router = express.Router();
const logger = require('morgan');
const bodyParser = require('body-parser');

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
    response.send('Lista de mensajes');
});

router.delete('/message', function(request, response){
    console.log(request.query);
    console.log(request.body);
    response.send(`Mensaje ${request.body.text} Añadido correctamente`);
})
// app.use('/', function(request, response) {
//     response.send('I am okay ✅🤖');
// });

app.listen(3000, ()=>{
    console.info('Express was init successfully. ✅🚀');
});

console.log('The application is listen in http://localhost:3000 ✅🤖')
