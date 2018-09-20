let BooksCollection = require('../data/books');
let AuthorsCollection = require('../data/authors');

let BookController = {

    getBooks () {
        let booksList = '<h1>Books List</h1><div><span style="width: 200px; display: inline-block;">title</span>' +
            '<span <span style="width: 200px; display: inline-block;">author</span></div>';

        BooksCollection.forEach((book) => {
            console.log('book',book);
            booksList += '<span style="width: 200px; display: inline-block;"><strong>' + book.title + '</strong></span>' +
                '<span style="width: 200px; display: inline-block;"> <em>' + this.getAuthorById(book.authorId) +'</em></span><br>';
        })
        return booksList;
    },

    getAuthors() {
        let authorsList = '<h1>Authors List</h1><div><span style="width: 200px; display: inline-block;">Name</span></div>';
        AuthorsCollection.forEach((author) => {
            authorsList += '<span>'+ author.name+'</span><br>'
        });
        return authorsList;
    },
    getAuthorById(id) {
        let authorName = '';
        return AuthorsCollection.find((author) => {
            return author.id === id;
        }).name;
    }
};

module.exports = BookController;
