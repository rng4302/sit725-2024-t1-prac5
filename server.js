var express = require("express")
var app = express()
require('./dbconnection');
var port = process.env.port || 3000;
let router = require('./routes/routes');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.listen(3000, () => {
    console.log("express server started");
});


/*var express = require("express")
const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
var app = express()
const uri = "mongodb+srv://Raj:root@cluster0.aj2mz9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var port = process.env.port || 3000;
let collection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Cat');
        console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

const cardList = [
    {
        title: "Kitten 2",
        image: "images/",
        link: "About Kitten 2",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.png",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"
    }
]

app.get('/', (req, res) => {
    res.render('index.html');
});
app.get('/api/cards', (req, res) => {
    getAllCats((err, result) => {
        if (!err) {
            res.json({
                statusCode: 200, data: result, message: 'get all cards success'
            });
        }
    });
});

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("App listening to:" + port)
    runDBConnection();
})*/