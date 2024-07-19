# Problem Set 1: Palindrome Pairs

## Problem Description

Given a list of unique words, find all pairs of distinct indices (i, j) in the list such that the concatenation of the two words, i.e., `words[i] + words[j]`, forms a palindrome.

**Example:**
For the input `["bat", "tab", "cat"]`, the output should be `[[0, 1], [1, 0]]` because the concatenated palindromes are `["battab", "tabbat"]`.

## Solution Overview

1. Created `isPalindrome()` function, which accepts a string, to check whether a word is a palindrome or not. This function returns `true` if the string is the same when reversed, otherwise `false`.

2. Created `palindromePairs()` function that accepts a list of words. This function iterates through all possible pairs of words in the list of words. For each pair, it concatenates the two words and checks if the resulting string is a palindrome using the isPalindrome function. If it is, it adds the pair of indices `[i, j]` to the pairs array. Finally, returns the `pairs` array which is the list of pairs.

## Instructions to Run the Code

1. **Prerequisites:**

   - Ensure you have Node.js installed on your system.
   - If Node.js is not installed, you can download it from [here](https://nodejs.org/en).

2. **Running the Code:**

   - Navigate to the `problem_set_1` directory in your terminal.
   - Run the code using the command:
     ```bash
     node palindrome_pairs.js
     ```

3. **Testing the Solution:**
   - Try another `inputWords` to test different cases by commenting the current one and uncommenting one of those being commented.
   - Save the file by pressing `Ctrl+S` for Windows and `Cmd+S` for Mac.
   - Run the code again.
