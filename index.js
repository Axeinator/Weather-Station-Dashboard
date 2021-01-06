const express = require('express');
const data = require('./mongo')
const path = require('path');
const celsius = require('./public/graphSetup')
const app = express();

function toCelsius(temp) {
    return (temp - 32) * (5/9)
}

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')));
app.use('/favicon.ico', express.static('public/favicon.ico'))
app.get('/', (req, res) => {
    Promise.all([data.temperature(), data.humidity(), data.latest()])
        .then(data => {
            data[3] = data[0].map(obs => {
                return {
                    temperature: toCelsius(obs.temperature),
                    time: obs.time
                }
            })
            res.render('charts', {
                tempsF: data[0],
                tempsC: data[3],
                humidities: data[1],
                current: data[2]
            })
        })
})

app.get('/currentConditions', (req, res) => {
    data.latest()
        .then(data => res.json(data))
})

app.get('/info', (req, res) => {
    res.render('info')
})

module.exports = app
