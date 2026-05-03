# Problem 1

## My Approach (in `problem1.js`)

I used two pointers (`p1` and `p2`) that start as adjacent indices and move forward together:

- Start with `p1 = 0`, `p2 = 1`
- Compute `nums[p1] + nums[p2]`
- If sum is smaller than target, increment both pointers
- If sum is greater than or equal to target, return `[p1, p2]`

### What this approach is trying to do

It tries to find the answer in one forward pass by checking only neighbor pairs:

- `(0,1)`, `(1,2)`, `(2,3)`, ...

### Issues with this approach

1. It does not check all valid pairs.
   - Two Sum requires checking any two indices `i != j`.
   - This approach only checks adjacent pairs, so it can miss the real answer.

2. It can return incorrect indices.
   - The condition `current_val >= target` returns even when sum is not exactly equal to target.
   - Example: target is 9, pair sum is 10, it still returns that pair.

3. It assumes ordering behavior that Two Sum does not guarantee.
   - Input is not sorted.
   - Moving both pointers together does not logically narrow search space here.

## Correct Approach (Hash Map)

The correct solution stores seen numbers and their indices in a hash map:

1. For each index `i`, compute `diff = target - nums[i]`
2. If `diff` is already in the map, we found the pair:
   - previous index is `hash[diff]`
   - current index is `i`
3. Otherwise store current number: `hash[nums[i]] = i`

This guarantees correctness because every element is checked against previously seen values.

## Why the Correct Approach is More Efficient

- Time Complexity:
  - My approach: `O(n)` checks, but incomplete/incorrect for general Two Sum.
  - Hash map approach: `O(n)` and correct.

- Space Complexity:
  - My approach: `O(1)`
  - Hash map approach: `O(n)` extra space

The hash map approach is considered better because it is both efficient and correct for all valid inputs.  
In algorithm problems, a slightly higher space usage is acceptable when it guarantees correctness with linear time.
