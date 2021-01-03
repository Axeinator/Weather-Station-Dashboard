const express = require('express');
const data = require('./mongo')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8081

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')));
app.use('/favicon.ico', express.static('public/favicon.ico'))
// TODO Try to open a port on the RPi that can pull a fresh reading, then map this to a button
// and perform the request server side
app.get('/', (req, res) => {
    stats = []
    data.temperature(result => {
        stats.push(result)
        data.humidity(result => {
            stats.push(result)
            data.latest(result => {
                stats.push(result)
                res.render('charts', {
                    temps: stats[0],
                    humidities: stats[1],
                    current: stats[2]
                });
            })
        })
    })
})

app.get('/currentConditions', (req, res) => {
    data.latest(result => {
            res.json(result)
        }
    )
})

app.get('/info', (req, res) => {
   res.render('info')
})

app.listen(PORT, () => {
    console.log('server started on port ' + PORT);
});
