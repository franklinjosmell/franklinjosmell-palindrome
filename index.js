// Adds `reverse` to all string.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  return (!this || /^\s*$/.test(this));
}

Array.prototype.last = function() {
  // return this[this.length - 1];
  return this.slice(-1)[0];
}


// // Reverses a string
// function reverse(string) {
//   // return string.split("").reverse().join("");
//   return Array.from(string).reverse().join("");
// }

// // Return true for a palindrome, false otherwise.
// function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent)
// }

// Return an array of the username and 
// domain for a standard email address
// function emailParts(email) {
//   let processedEmail = email.toLowerCase();
//   let result = {}
//   let arrayResult = processedEmail.split("@");

//   result.username = arrayResult.shift();
//   result.domain = arrayResult.shift();

//   return result;
// }

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() == this.processedContent().reverse();
  }

  // this.louder = function() {
  //   return this.content.toUpperCase();
  // }
}

// phrase = new Phrase("Racecar");
// console.log(phrase.palindrome())
// console.log(phrase.louder())

// // Defines a TranslatedPhrase object
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Return translation processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }

// TranslatedPhrase.prototype = new Phrase();

// let frase = new TranslatedPhrase("recognize", "reconocer")
// console.log(frase.palindrome());

// let napoleonsLament = new Phrase("Able was I ere I saw Elba");
// console.log(napoleonsLament.palindrome());