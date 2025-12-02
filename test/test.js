let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
    describe("#palindrome", function() {
        
        it("should return false for a non palindrome", function(){
            let nonPalindrome = new Phrase('apple');
            assert(!nonPalindrome.palindrome());
        });

        it("should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase('racecar');
            assert(plainPalindrome.palindrome());
        });

        it("should return true for mixed-case plaindrome", function() {
            let mixedCasePlaindrome = new Phrase('RacecaR');
            assert(mixedCasePlaindrome.palindrome());
        })

        it("should return true for a plaindrome with punctuation", function() {
            let punctuatedPlaindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPlaindrome.palindrome());
        });

    });
    describe('#letters', function() {
        it("should return only letters", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
        });
        it("should return empty string when there is no match", function() {
            let emptyString =  new Phrase("");
            assert.strictEqual(emptyString.letters(),"");
        })
    });
});