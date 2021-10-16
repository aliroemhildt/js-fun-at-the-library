function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
};

function saveReview(review, reviewsArray) {
  alreadyInArray = false;
  for (i = 0; i < reviewsArray.length; i++) {
    if (review === reviewsArray[i]) {
      alreadyInArray = true;
    };
  };
  if (alreadyInArray === false) {
    reviewsArray.push(review);
  };
};

function calculatePageCount(title) {
  var numTitleLetters = title.length;
  numPages = numTitleLetters * 20;
  return numPages;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  };
  return book;
};

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
