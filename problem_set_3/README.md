# Problem Set 3: Longet Increasing Subsequence

## Problem Description

Given an unsorted array of integers, find the length of the longest increasing subsequence.

**Subsequence:** A subsequence is a sequence of elements that appear in the same order as they
are in the original sequence, but not necessarily consecutively.
**Increasing Subsequence:** An increasing subsequence is a subsequence in which the elements are
in strictly increasing order.

The "Longest Increasing Subsequence" problem asks for the length of the longest increasing
subsequence in a given array. For example, given the array: [10, 9, 2, 5, 3, 7, 101, 18]
One possible increasing subsequence is [2, 5, 7, 18], and the length of this subsequence is 4. The goal
is to find the length of the longest increasing subsequence for a given array.

**Example:**

- Input: [10, 9, 2, 5, 3, 7, 101, 18]
- Output: 4

## Solution Overview

This problem can be solved using a nester for loop, however, it gives a time complexity of `O(n^2)`.

My approach for this problem is to use a binary search inside a for loop to achieve an `O(n log n)` time complexity.

`lengthOfLIS():`

1. If the length of input array `nums` is 0, return `0` immediately.

2. If the length of input array `nums` is 1, return `1` immediately.

3. Iterate over each item `num` in `nums` array.

4. Perform binary search to find the position where `num` should be placed or replace an existing value in the `lis` array.

5. After the binary search, if `left` is equal to the length of `lis` array, APPEND num to the `lis` array. Otherwise, replace the last value in the `lis` array with the `num`.

6. Finally, return the length of the `lis` array.

## Instructions to Run the Code

1. **Prerequisites:**

   - Ensure you have Node.js installed on your system.
   - If Node.js is not installed, you can download it from [here](https://nodejs.org/en).

2. **Running the Code:**

   - Navigate to the `problem_set_3` directory in your terminal.
     ```bash
     cd problem_set_3
     ```
   - Run the code using the command:
     ```bash
     node longest_increasing_subsequence.js
     ```
