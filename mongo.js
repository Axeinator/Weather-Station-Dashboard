const { MongoClient } = require("mongodb");
const uri = 'mongodb+srv://mongoCredentials@main.kc4dw.mongodb.net/weather?retryWrites=true&w=majority'

const prev24 = new Date(Date.now() - 86400000)
const query = {time: {$gte: prev24}}

function temperature(done) {
MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  let options = {projection: {_id:0, temperature: 1, time: 1}}

  if (err) throw err;
  let weather = client.db('weather');
  
  weather.collection('data').find(query, options).toArray(function(err, result) {
    if (err) throw err;
    client.close();
    done(result)
  });
});
}

function humidity(done) {
MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  let options = {projection: {_id:0, humidity: 1, time: 1}}

  if (err) throw err;
  let weather = client.db('weather');
  
  weather.collection('data').find(query, options).toArray(function(err, result) {
    if (err) throw err;
    client.close();
    done(result)
  });
});
}

module.exports = { temperature, humidity }