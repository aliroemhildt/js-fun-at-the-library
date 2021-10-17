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

function checkoutBook(library, bookTitle, genre) {
  for (i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === bookTitle) {
      library.shelves[genre].splice(i,1);
     };
   };
   return `You have now checked out ${bookTitle} from the ${library.name}`;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
