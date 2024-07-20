function isValid(string) {
  const stack = [];

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of string) {
    //if char is an opening bracket, push it to the stack
    if (brackets[char]) stack.push(char);
    //if char is not an opening bracket, check if it matches the last bracket in the stack
    else {
      const lastInStack = stack.pop();
      if (brackets[lastInStack] !== char) return false;
    }
  }
  // return true if stack is empty, this means all brackets are closed
  return stack.length === 0;
}

const inputString1 = "()[]{}";
const inputString2 = "([()]{}";
const inputString3 = "([)]";
const inputString4 = "([{}])";
const inputString5 = "()[]";

console.log(isValid(inputString1));
console.log(isValid(inputString2));
console.log(isValid(inputString3));
console.log(isValid(inputString4));
console.log(isValid(inputString5));
