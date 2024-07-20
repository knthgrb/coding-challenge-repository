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
const inputWords1 = ["bat", "tab", "cat"];
const inputWords2 = ["abcd", "dcba", "lls", "s", "sssll"];
const inputWords3 = ["rac", "dcba", "lls", "sr", "car"];
const inputWords4 = ["mad", "dcba", "ll", "dam", "ll"];

console.log(palindromePairs(inputWords1));
console.log(palindromePairs(inputWords2));
console.log(palindromePairs(inputWords3));
console.log(palindromePairs(inputWords4));
