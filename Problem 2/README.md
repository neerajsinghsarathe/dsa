# Problem 2

## My Approach (in `problem2.js`)

I convert the number to a string and compare characters from both ends:

- `p1` starts at the beginning
- `p2` starts at the end
- If `str_x[p1] !== str_x[p2]`, return `false`
- Move inward until the middle, then return `true`

### What this approach is trying to do

It uses the standard two-pointer palindrome check on string representation, which is a valid idea for this problem.

### Issue in current implementation

The loop condition is computed only once before the loop:

- `const cond = ...`

Because `cond` is not updated after `p1` and `p2` change, the stopping condition is wrong.  
This can cause incorrect behavior or out-of-bounds comparisons depending on input.

## Correct / Optimized Approach (Math, No String)

The optimized solution avoids converting to string:

1. Reject negatives and numbers ending in `0` (except `0` itself)
2. Reverse only half of the number using modulo and division
3. Compare:
   - `x === reversed` for even digit count
   - `x === Math.floor(reversed / 10)` for odd digit count

## Why the Optimized Approach is Better

- Time Complexity:
  - Both are `O(n)` in number of digits.

- Space Complexity:
  - String approach: `O(n)` extra space (string copy)
  - Optimized math approach: `O(1)` extra space

- Reliability:
  - The optimized approach has clear termination logic and avoids string conversion edge cases.

So the optimized solution is more efficient in space and is robust while still keeping linear time.
