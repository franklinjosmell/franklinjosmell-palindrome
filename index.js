module.exports = Phrase;

// Adds `reverse` to all string.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Return the letters in the content.
  // For example:
  //  new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    const lettetsRegEx = /[a-z]/gi;
    return (this.content.match(lettetsRegEx) || []).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() == this.processedContent().reverse();
  }
}