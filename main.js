const Phrase = require("mhartl-palindrome");




function palindromeTester() {
  let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(string);

  if (phrase.palindrome()) {
     document.querySelector("#palindromeResult").innerHTML = `<strong>${phrase.content}</strong> is a palindrome!"`;
  } else {
         document.querySelector("#palindromeResult").innerHTML = `<strong>${phrase.content}</strong> is not a palindrome!`;
  }
}


document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("#palindromeTester");
    button.addEventListener("click" , function() {
    palindromeTester();
})
});

 



 

