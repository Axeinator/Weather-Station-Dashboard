const express = require('express');
const data = require('./mongo')
const path = require('path');
const app = express();

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')));
app.use('/favicon.ico', express.static('public/favicon.ico'))
app.get('/', (req, res) => {
    Promise.all([data.temperature(), data.humidity(), data.latest()])
        .then(data => res.render('charts', {
            temps: data[0],
            humidities: data[1],
            current: data[2]
        }))
})

app.get('/currentConditions', (req, res) => {
    data.latest()
        .then(data => res.json(data))
})

app.get('/info', (req, res) => {
    res.render('info')
})

module.exports = app
