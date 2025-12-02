// Adds `reverse` methode to String object
module.exports = Phrase;

String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {

     this.content = content;  
 
     this.processedContent = function processedContent() {
      return this.letters().toLowerCase();
     }

     this.letters = function letters() {
      return this.content.match(/[a-zA-Z]+/g).join(""); 
     }

      this.palindrome = function palindrome() {
      return this.processedContent() === this.processedContent().reverse();
     }

    
}

 
