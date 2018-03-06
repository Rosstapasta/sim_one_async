const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();



const app = express();

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use( bodyParser.json() );
app.use( cors() )


//ENDPOINTS
app.get(`/api/:shelf`, (req, res, next) => {
    console.log("hit get shelf")
    const { shelf } = req.query;

    app.get('db').get_shelf([shelf]).then( shelfs => {res.status(200).send(shelfs);})
})


app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )