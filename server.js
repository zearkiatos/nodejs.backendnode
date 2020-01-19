const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./src/network/routes');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, ()=>{
    console.info('Express was init successfully. ✅🚀');
});

app.use('/app',express.static('public'));

console.log('The application is listen in http://localhost:3000 ✅🤖');
router(app);
