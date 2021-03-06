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
        //METHOD FOR GETTING ALL THE BOOKS BY  ONE AUTHOR HERE
        classMethods: {
            findByAuthor: function () {
                return Book.findAll({
                    where: {
                       author_id: authorId
                    }
                }).then(function(thebooks){
                    return thebooks
            });
            }
        }
    })


//ADD BOOK MODEL

var Book = db.define('book', {
    title: {
        type: Sequelize.STRING
    },
    authorName: {
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
        instanceMethods: {
            blurb: function (query) {
                var blurby = this.synopsis;
                return blurby.slice(0, 10);
            }
        }
    })

Book.belongsTo(Author);
Author.hasMany(Book);

module.exports = {
    db: db,
    Author: Author,
    Book: Book
}