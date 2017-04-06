var router = require('express').Router();
var db = require('../models/db').db;
var Author = require('../models/db').Author;
var Book = require('../models/db').Book;

//ROUTES TO ADD
router.get('/authors', function (req, res, next) {
    Author.findAll()
        .then(function (authors) {
            res.send(authors)
        })
        .catch(next);
})
router.get('/books', function (req, res, next) {
    Book.findAll()
        .then(function (books) {
            res.json({ books: books })
        })
        .catch(next);
})
router.post('/', function (req, res, next) {
    Author.create(req.body)
        .then(function (newAuthor) {
            res.send(newAuthor)
        })
        .catch(next);
});
router.post('/', function (req, res, next) {
    Book.create(req.body)
        .then(function (newBook) {
            res.send(newBook)
        })
        .catch(next);
});
router.delete('/:bookId', (req, res, next) => {
    // remove(req.params.name, req.params.index);
    // res.sendStatus(204);
    Book.findById(req.params.bookId)
        .then(function (book) {
            return book.destroy()
        })
        .then(function () {
            res.send('Burn the book!')
        })
});
router.delete('/:authorId', (req, res, next) => {
    Author.findById(req.params.authorId)
        .then(function (author) {
            return author.destroy()
        })
        .then(function () {
            res.send('This author bust be silenced!')
        })
});
router.get('/author/:id', function (req, res, next) {
    Author.findById(req.params.id)
        .then(function (author) {
            res.status(200).send(author);
        })
        .catch(next);
})
router.put('/:bookId', function (req, res, next) {
    Book.findById(req.params.bookId)
        .then(function (book) {
           return book.update(req.body);
        })
        .then( function(newBook){
            res.send(newBook);
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