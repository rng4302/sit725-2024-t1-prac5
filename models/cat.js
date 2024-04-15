let client = require('../dbconnection');

let collection = client.db().collection('Cat');

function postCat(cat, callback) {
    collection.InsertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

module.exports = { postCat, getAllCats };