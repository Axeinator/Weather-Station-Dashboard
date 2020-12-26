const express = require('express');
const data = require('./mongo')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8081

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  var stats = data.temperature(result => res.render('res',{temps: result}))
});

app.listen(PORT, () => {
  console.log('server started on port ' + PORT);
});
