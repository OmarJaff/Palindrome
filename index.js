// Adds `reverse` methode to String object
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
     this.content = content;

     this.processor = function processor(string) {
        return string.toLowerCase()
     }

     this.processedContent = function processedContent() {
      return this.processor(content);
     }

     //this is how you define a method:
     this.palindrome = function palindrome() {
    
      return this.processedContent() === this.processedContent().reverse();
     }

}

 
