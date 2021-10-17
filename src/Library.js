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
  var message = "";
  var inShelf = false;
  for (i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === bookTitle) {
      library.shelves[genre].splice(i,1);
      message = `You have now checked out ${bookTitle} from the ${library.name}`;
      inShelf = true;
    };
  };
  if (inShelf === false) {
    message = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  };
  return message;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
