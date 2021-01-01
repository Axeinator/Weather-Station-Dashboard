const express = require('express');
const data = require('./mongo')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8081

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')));
app.use('/favicon.ico', express.static('public/favicon.ico'))

app.get('/info', (req, res) => {
    res.render('info')
})

app.get('/', (req, res) => {
    Promise.all([data.temperature, data.humidity, data.latest])
        .then(result => {
            res.render('charts', {
                temps: result[0],
                humidities: result[1],
                current: result[2]
            })
        })
})
app.get('/currentConditions', (req, res) => {
    data.latest
        .then(result => res.json(result))
})

app.listen(PORT, () => {
    console.log('server started on port ' + PORT);
});
