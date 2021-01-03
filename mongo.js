const {MongoClient} = require("mongodb");
const uri = 'mongodb+srv://graphs:E1vfhZPFqeuoadgv@main.kc4dw.mongodb.net/weather?retryWrites=true&w=majority'

const prev24 = new Date(Date.now() - 86400000)
const query = {time: {$gte: prev24}}

const temperature = new Promise((resolve, reject) => {
    MongoClient.connect(uri, {useUnifiedTopology: true}, function (err, client) {
        let options = {projection: {_id: 0, temperature: 1, time: 1}}

        if (err) throw err;
        let weather = client.db('weather');
        weather.collection('data').find(query, options).toArray(function (err, result) {
            client.close();
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
})

const humidity = new Promise((resolve, reject) => {
    MongoClient.connect(uri, {useUnifiedTopology: true}, function (err, client) {
        let options = {projection: {_id: 0, humidity: 1, time: 1}}

        if (err) throw err;
        let weather = client.db('weather');

        weather.collection('data').find(query, options).toArray(function (err, result) {
            client.close();
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    });
});

const latest = new Promise((resolve, reject) => {
    MongoClient.connect(uri, {useUnifiedTopology: true}, function (err, client) {
        if (err) throw err;
        let weather = client.db('weather')

        weather.collection('data').find().sort({_id: -1}).limit(1).project({_id: 0}).toArray(function (err, result) {
            client.close();
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        });

    })
})

module.exports = {temperature, humidity, latest}