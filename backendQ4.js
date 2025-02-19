
function groupBooksByAuthor(books) {
    return books.reduce((acc, book) => {
        if (!acc[book.author]) {
            acc[book.author] = [];
        }
        acc[book.author].push(book);
        return acc;
    }, {});
}


function BooksPublishedAfter(books, year) {
    return books.filter(book => book.publicationYear > year).map(book => book.title);
}


function generateBookSummaries(books) {
    return books.map(book => `${book.title} by ${book.author} (${book.publicationYear})`);
}


function sortByPublicationYear(books) {
    return [...books].sort((a, b) => a.publicationYear - b.publicationYear);
}


const books = [
    { title: "The prayer of stronger woman", author: "Alice Umubyeyi", publicationYear: 2003 },
    { title: "The way to be rich", author: "Aimable Iradukunda", publicationYear: 2000 },
    { title: "simple way to know enlgish", author: "Angel Uwizera", publicationYear: 2005 },
    { title: "how to study well", author: "Umutesi Celine", publicationYear: 2004 },
    { title: "icrease your skills by read this", author: "Octavie Bonte", publicationYear: 2002 }
];

console.log(groupBooksByAuthor(books));
console.log(BooksPublishedAfter(books, 1950));
console.log(generateBookSummaries(books));
console.log(sortByPublicationYear(books));
