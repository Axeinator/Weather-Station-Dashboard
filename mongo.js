const {MongoClient} = require("mongodb");
const uri = 'mongodb+srv://mongoCredentials@main.kc4dw.mongodb.net/weather?retryWrites=true&w=majority'

const prev24 = new Date(Date.now() - 86400000)
const query = {time: {$gte: prev24}}

async function temperature() {
    let client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    await client.connect()

    let options = {projection: {_id: 0, humidity: 0}}


    let weather = client.db('weather');

    let cursor = weather.collection('data')
        .find(query, options)

    let results = await cursor.toArray()

    await client.close()

    return results
}

async function humidity() {
    let client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    await client.connect()

    let options = {projection: {_id: 0, temperature: 0}}


    let weather = client.db('weather');

    let cursor = weather.collection('data')
        .find(query, options)

    let results = await cursor.toArray()

    await client.close()

    return results

}

async function latest() {
    let client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    await client.connect()

    let options = {
        sort: {time: -1},
        projection: {_id: 0}
    }
    let weather = client.db('weather')

    let cursor = weather.collection('data')
        .find(query, options)
        .limit(1)

    let results = await cursor.toArray()

    await client.close()

    return results


}


module.exports = {temperature, humidity, latest}
