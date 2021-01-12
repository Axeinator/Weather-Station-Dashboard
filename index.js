const express = require('express');
const path = require('path');
const data = require('./mongo');

const app = express();

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));
app.use('/favicon.ico', express.static('public/favicon.ico'));
app.get('/', (req, res) => {
  Promise.all([data.temperature(), data.humidity(), data.latest()])
    .then((stats) => {
      const converted = stats[0].map((obs) => ({
        temperature: toCelsius(obs.temperature),
        time: obs.time,
      }));
      res.render('charts', {
        tempsF: stats[0],
        tempsC: converted,
        humidities: stats[1],
        current: stats[2],
        celsHourTempURL: process.env.celsHour,
        celsDayTempURL: process.env.celsDay,
        farHourTempURL: process.env.fahrenHour,
        farDayTempURL: process.env.farhrenDay,
      });
    });
});

app.get('/currentConditions', (req, res) => {
  data.latest()
    .then((stats) => res.json(stats));
});

app.get('/info', (req, res) => {
  res.render('info');
});

module.exports = app;
