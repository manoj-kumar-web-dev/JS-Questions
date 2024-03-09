function findBookByTitle(books, targetTitle) {
    return books.find(function(book) {
        return book.title === targetTitle;
    });
}

// o/p
let books = [
    { title: 'Get Rich', author: 'Manu' },
    { title: 'Think Rich', author: 'Jonam' },
    { title: '1995', author: 'Kumar' }
];

let targetTitle = 'Get Rich';
let book = findBookByTitle(books, targetTitle);
console.log(book); 
