var router = require('express').Router();
var db = require('../models/db').db;
var author = require('../models/db').Author;
var book = require('../models/db').Book;

//ROUTES TO ADD
router.get('/authors', function (req, res, next) {
    Article.findAll()
        .then(function (Articles) {
            res.json(Articles)
        })
        .catch(next);
})
/*
    GET All AUTHORS (router.get)
    GET ALL BOOKS (router.get)
    ADD NEW AUTHOR (router.post)
    ADD NEW BOOK  (router.post)
    DELETE BOOK (router.delete)
    DELETE AUTHOR (And all their books) (router.delete)
    GET BOOKS BY AUTHOR (router.get with params) localhost:3000/authors/3 => see all books by author #3
    CHANGE BOOK TITLE (put/update)
*/

//DAN 201 707 3744

router.get('/', function (req, res, next) {
    res.status(200).send('Hello')
})



module.exports = router;