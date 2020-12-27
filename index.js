const express = require('express');
const data = require('./mongo')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8081

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    stats = []
    data.temperature(result => {
        stats.push(result)
        data.humidity(result => {
            stats.push(result)
            res.render('res', {
                temps: stats[0],
                humidities: stats[1]
            });
        })
    })


})

app.listen(PORT, () => {
    console.log('server started on port ' + PORT);
});
