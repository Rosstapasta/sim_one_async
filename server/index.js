require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const controller = require('./controller.');

const app = express();
app.use( bodyParser.json() );
app.use( cors() )

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})


//ENDPOINTS
app.get(`/api/:shelfletter`, controller.getshelf)


app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )