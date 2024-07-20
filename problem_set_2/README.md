# Problem Set 2: Valid Parentheses

## Problem Description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
valid. An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

**Examples:**

- Input: ()[]{}
- Output: True
- Input: ([)]
- Output: False

## Solution Overview

My approach in solving this problem is with the use of `Stack` data structure.

`isValid()` function:

1. Created an empty stack and a map of brackets with its corresponding closing bracket.

```javascript
const stack = [];

const brackets = {
  "(": ")",
  "[": "]",
  "{": "}",
};
```

2. Traverse the input string character by character.
3. If opening bracket is encountered, push it into the stack.

```javascript
if (brackets[char]) stack.push(char);
```

If closing bracket is encountered, check if it matches the most recent opening bracket from the stack. If if does not match, return `false`

```javascript
const lastInStack = stack.pop();
if (brackets[lastInStack] !== char) return false;
```

4. Finally, check if the stack is empty. This means that all opening brackets are closed.
   Return `true` if the stack is empty, otherwise `false`.

```javascript
return stack.length === 0;
```

## Instructions to Run the Code

1. **Prerequisites:**

   - Ensure you have Node.js installed on your system.
   - If Node.js is not installed, you can download it from [here](https://nodejs.org/en).

2. **Running the Code:**

   - Navigate to the `problem_set_2` directory in your terminal.
   - Run the code using the command:
     ```bash
     node valid_parentheses.js
     ```
