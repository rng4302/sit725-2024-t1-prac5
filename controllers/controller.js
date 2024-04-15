let collection = require('../models/cat');

const postCat = (req, res) => {
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'successfully posted cat' })
        }
    });
}

const getAllCats = (req, res) => {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get all cats' })
        }
    });
}

module.exports = { postCat, getAllCats }