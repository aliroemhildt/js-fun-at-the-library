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

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
