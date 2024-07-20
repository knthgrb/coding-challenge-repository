function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let lis = [];

  for (let num of nums) {
    // binary search to find the position where num should be placed or
    // replace an existing value in the lis array
    let left = 0,
      right = lis.length;
    while (left < right) {
      let middle = Math.floor((left + right) / 2);

      if (lis[middle] < num) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }

    // if left is equal to the length of lis array, APPEND num to the lis array
    // Otherwise, replace the last value in the lis array with the num
    if (left === lis.length) {
      lis.push(num);
    } else {
      lis[left] = num;
    }
  }

  return lis.length;
}

// Test inputs
const input1 = [10, 9, 2, 5, 3, 7, 101, 18];
const input2 = [1, 9, 2, 5, 3, 7, 10];
const input3 = [100, 9, 19, 19, 3, 7, 10, 8];
const input4 = [];
const input5 = [100];

console.log(lengthOfLIS(input1));
console.log(lengthOfLIS(input2));
console.log(lengthOfLIS(input3));
console.log(lengthOfLIS(input4));
console.log(lengthOfLIS(input5));
