/* ----------------- Hungry Lion ----------------------------------------
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/


/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/
exports.numDays = function() {
// number of times the new caretaker fed the lion. one array entry per day
  var mealsPerDay = [ 5, 4, 3, 6, 2, 4, 3, 4, 5, 1 ],
    tooHungryDay;
  var tMeals = 0;
  var aMeals = 0;
  for (i = 0; i < mealsPerDay.length; i++) {
    tMeals = tMeals + mealsPerDay[i];
    aMeals = (tMeals/(i + 1));
    console.log('Day Count Marker: ' + i);
    console.log('Total Meals Given to Lion: ' + tMeals);
    console.log('Average Meals Per Day: ' + aMeals);
    if ((aMeals < 4) && !tooHungryDay) {
      tooHungryDay = i + 1;
    }
  }
    console.log('The lion first wanted protein supplements on day ' + tooHungryDay + '.');
    return tooHungryDay;
  };

