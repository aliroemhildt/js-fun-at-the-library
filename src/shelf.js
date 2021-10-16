function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  };
};

function unshelfBook(bookName, shelfName) {
  var bookIndex = null;
  for (i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === bookName) {
      bookIndex = i;
    };
    if (bookIndex !== null) {
      shelfName.splice(i,1);
    };
  };
};

function listTitles(shelfName) {
  titleList = "";
  for (i = 0; i < shelfName.length; i++) {
  if (titleList === "") {
    titleList += shelfName[i].title;
  } else {
    titleList += ", " + shelfName[i].title;
  };
  };
  return titleList;
};

function searchShelf(shelfName, title) {
  onShelf = false;
  for (i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === title) {
      onShelf = true;
    };
  };
  return onShelf;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
