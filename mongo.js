const { MongoClient } = require('mongodb');

const creds = process.env.MONGO;
const uri = `mongodb+srv://${creds}@main.kc4dw.mongodb.net/weather?retryWrites=true&w=majority`;

const prev24 = new Date(Date.now() - 86400000);
const query = { time: { $gte: prev24 } };

async function temperature() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const options = { projection: { _id: 0, humidity: 0 } };

  const weather = client.db('weather');

  const cursor = weather.collection('data')
    .find(query, options);

  const results = await cursor.toArray();

  await client.close();

  return results;
}

async function humidity() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const options = { projection: { _id: 0, temperature: 0 } };

  const weather = client.db('weather');

  const cursor = weather.collection('data')
    .find(query, options);

  const results = await cursor.toArray();

  await client.close();

  return results;
}

async function latest() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const options = {
    sort: { time: -1 },
    projection: { _id: 0 },
  };
  const weather = client.db('weather');

  const cursor = weather.collection('data')
    .find(query, options)
    .limit(1);

  const results = await cursor.toArray();

  await client.close();

  return results;
}

module.exports = { temperature, humidity, latest };
