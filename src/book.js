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
    }
  }
  if (alreadyInArray === false) {
    reviewsArray.push(review);
  }
};

function calculatePageCount(title) {
  var letters = title.length;
  pages = letters * 20;
  return pages;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
