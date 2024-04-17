const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Raj:root@cluster0.aj2mz9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const path = require('path');

const collectionName = "cat";

exports.getAllKittens = async (req, res) => {
    try {
        await client.connect();
        const db = client.db("test");
        const cats = await db.collection(collectionName).find().toArray();
        res.json({ statusCode: 200, data: cats, message: 'Retrieved all cards successfully' });
    } catch (err) {
        console.error("Error fetching cards:", err);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
};

exports.createKitten = async (req, res) => {
    const newKitten = req.body;
    try {
        await client.connect();
        const db = client.db("test");
        const result = await db.collection(collectionName).insertOne(newKitten);
        res.json({ statusCode: 200, data: result.ops, message: 'New kitten created successfully' });
    } catch (err) {
        console.error("Error creating kitten:", err);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
};

exports.getIndex = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};


