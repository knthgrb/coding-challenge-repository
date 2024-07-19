// Function to check if the word is a palindrome
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

// Function to collect all palindromic pairs
function palindromePairs(words) {
  let pairs = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      // Skip if i and j are equal
      if (i === j) continue;

      const concatenatedWord = words[i] + words[j];
      if (isPalindrome(concatenatedWord)) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}

// Test inputs
const inputWords = ["bat", "tab", "cat"];
// const inputWords = ["abcd", "dcba", "lls", "s", "sssll"];
// const inputWords = ["rac", "dcba", "lls", "sr", "car"];
// const inputWords = ["mad", "dcba", "ll", "dam", "ll"];

const listOfPalindromicPairs = palindromePairs(inputWords);
console.log(listOfPalindromicPairs);
