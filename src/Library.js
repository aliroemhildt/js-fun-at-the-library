function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: []
    },
  };
  return library;
};

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
