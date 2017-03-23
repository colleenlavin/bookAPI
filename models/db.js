var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/library');

var Author = db.define('author', {
    name: {
        type: Sequelize.STRING
    },
    language: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.DATE
    }
}, {
        //METHOD FOR GETTING ALL BOOKS BY AUTHOR HERE
    })


//ADD BOOK MODEL

var Book = db.define('book', {
    title: {
        type: Sequelize.STRING
    },
    synopsis: {
        type: Sequelize.STRING
    },
    datePublished: {
        type: Sequelize.DATE
    },
    isbn: {
        type: Sequelize.STRING
    }
}, {
    //METHOD FOR GETTING BLURB (first 10 chars of synopsis)
})

Book.belongsTo(Author)

module.exports = {
    db: db,
    Author: Author,
    Book : Book
}