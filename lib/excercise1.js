/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
var sentence1 = "More food please",
    sentence2 = "Come over here so you can scratch my belly";
*/

/*
 TODO: 20 points
 Your goal is to replace the words in the above sentences with "chirp" The
 test cases should pass when you're done. You'll be writing your code in
 the below functions Use **two** different types of loops to implement this.
 Specifically, a different loop type for each function. Return the translated
 sentance in your implemented function.
 HINT: the "split" method on String will be useful.
*/

exports.meerkatTalkOne = function() {
  var sentence = "More food please";
  // TODO: Implement me
  // This answer will receive 0 points: return 'chirp chirp chirp';
  var words = sentence.split(" ");
  
  var result = '';
  for(iterator = 0; iterator < words.length; iterator++) {
  	if(iterator !== (words.length - 1)) {
      result += 'chirp '; 
    } else {
      result += 'chirp';
    }
  }

  return result;

};

exports.meerkatTalkTwo = function() {
  var sentence = "Come over here so you can scratch my belly";
  // TODO: Implement me
  var words = sentence.split(" ");
  var result = '';
  var counter = 0;
  while(counter < words.length) {
    if(counter != (words.length - 1)) {
      result += 'chirp '; 
    } else {
      result += 'chirp';
    } 
    counter++;
  }

  return result;
};
