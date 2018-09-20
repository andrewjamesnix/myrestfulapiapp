let express = require('express');
let router = express.Router();
let bookController = require('../controllers/bookController');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/books', (req, res, next) => {
    res.send(bookController.getBooks())
});

router.get('/authors', (req, res, next) => {
    res.send(bookController.getAuthors())
});


module.exports = router;