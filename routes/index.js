var router = require('express').Router();
var db = require('../models/db').db;
var author = require('../models/db').Author;
var book = require('../models/db').Book;

//ROUTES TO ADD
router.get('/authors', function (req, res, next) {
    author.findAll()
        .then(function (Author) {
            res.json(Author)
        })
        .catch(next);
})
router.get('/books', function (req, res, next) {
    author.findAll()
        .then(function (Book) {
            res.json(Book)
        })
        .catch(next);
})
router.post('/:author', function (req, res, next) {
    author.create({
        name: req.params.name,
        language: req.params.language,
        birthday: req.query.birthday
    })
        .catch(next);
});
router.post('/:book', function (req, res, next) {
    book.create({
        title: req.params.title,
        authorName: req.params.name,
        synopsis: blurb(req.query.synopsis),
        datePublished: req.query.date,
        isbn: req.query.isbn
    })
        .catch(next);
});
router.delete('/:book', (req, res, next) => {
    remove(req.params.name, req.params.index);
    res.sendStatus(204);
});
router.delete('/:book', (req, res, next) => {
    author.findAll(book)
        .then(function (book) {
            remove(req.params.name, req.params.index);
        })
        .catch(next);
});
router.get('/author/:id', function (req, res, next) {
    author.findById(req.params.id)
        .then(function (book) {
            res.status().send(book);
        })
        .catch(next);
})
router.put('/:book/title', function(req, res, next) {
  book.findById(req.params.id)
    .then(function(book) {
      book.title();
    })
    .catch(next);
});
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