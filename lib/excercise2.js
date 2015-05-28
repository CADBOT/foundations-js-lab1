
/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next. http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

exports.chooseAnimal = function() {
  var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
    nextAnimal;
    // TODO Implement me
    randomNumber = Math.random();
    console.log(randomNumber);
     if (randomNumber <= 0.25) {
      nextAnimal = favoriteAnimals[0];
    } else if (randomNumber >= 0.26 && randomNumber <= 0.50) {
      nextAnimal = favoriteAnimals[1];
    } else if (randomNumber >= 0.51 && randomNumber <= 0.75) {
      nextAnimal = favoriteAnimals[2];
    } else  {
      nextAnimal = favoriteAnimals[3];
    }
    console.log(nextAnimal);

    return nextAnimal;
  };
