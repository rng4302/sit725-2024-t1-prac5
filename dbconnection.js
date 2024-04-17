const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Raj:root@cluster0.aj2mz9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if(err){
        alert("error connecting to db");
    } else {
        alert("DB Connected");
    }
})

module.exports = client;