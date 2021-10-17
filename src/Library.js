function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  };
  return library;
};

function addBook(library, book) {
  shelfName = book.genre;
  library.shelves[shelfName].push(book);
};

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
