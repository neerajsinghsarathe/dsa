# Problem 4

## Current Status (in `problem4.js`)

There is no current solution written for this problem yet.

That means there is no implemented approach to compare directly against the optimized one, but the expected idea for solving this problem is straightforward.

## Correct / Optimized Approach

The optimized solution uses the first string as a reference and checks each character position across all strings:

1. Start with an empty result string `res`
2. Loop through each character of `strs[0]`
3. For every position `i`, compare `strs[0][i]` with the character at the same position in every other string
4. If any string ends at that position, or the character does not match, return `res`
5. Otherwise append the matching character to `res`

This works because a common prefix must match at the same index in every string.

## Why This Approach is Efficient

- Time Complexity:
  - `O(n * m)`
  - `n` = number of strings
  - `m` = length of the shortest common prefix candidate

- Space Complexity:
  - `O(1)` extra space, ignoring the output string

## Why This is a Good Solution

The solution is efficient because it stops as soon as a mismatch is found.  
It does not do unnecessary substring creation or repeated comparisons of whole strings.

It is also easy to reason about:

- compare column by column
- stop at first mismatch
- build the prefix only while all strings agree

So for this problem, the optimized solution is both simple and efficient, and it is the standard approach you would usually want to write first.
