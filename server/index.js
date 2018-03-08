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

app.get(`/api/`, (req, res, next) => {
    const { shelf } = req.query;

    app.get('db').get_shelf(shelf).then( shelfs => {res.status(200).send(shelfs);})
})

app.put('/api/', (req, res, next) => {

    const {shelf} = req.query;
    const { bin, item, price } = req.body;

    app.get('db').update_bin(shelf, bin, item, price).then( shelfs => {res.status(200).send(shelfs)})
})

app.delete('/api/', (req, res, next) => {
 
    const { shelf, bin } = req.query;
    app.get('db').delete_bin( shelf, bin ).then( shelfs => {res.status(200).send(shelfs)})
})

app.post('/api/', (req, res, next) => {

    const { shelf } = req.query;
    const { bin, item, price } = req.body;

    app.get('db').create_bin(shelf, bin, item, price).then( shelfs => {res.status(200).send(shelfs)})
})

app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )