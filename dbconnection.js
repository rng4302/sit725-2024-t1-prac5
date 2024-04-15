const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
const uri = "mongodb+srv://Raj:root@cluster0.aj2mz9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;