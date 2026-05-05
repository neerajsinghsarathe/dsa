# Problem 3

## My Approach (in `problem3.js`)

I used two pointers (`p1`, `p2`) and tried to process Roman numerals in pairs:

- If `roman1 < roman2`, treat as subtractive pair and add `roman2 - roman1`
- If `roman1 === roman2`, add both together
- Else add only `roman1`
- Move pointers by `2` or `1` depending on case

### What this approach is trying to do

It attempts to directly handle both normal and subtractive forms by looking at two characters at a time.

### Issue in current implementation

The `roman1 === roman2` branch is incorrect for many valid numerals.

Example:
- `"III"` should be `3`
- Current logic reads first two `I`s together (`+2`) and skips them
- Then adds last `I` (`+1`) only if loop flow aligns, but this pairwise grouping can easily become fragile and is unnecessary

More importantly, grouping equal symbols in forced pairs is not the Roman numeral rule.  
Roman conversion is based on comparing current symbol with next symbol, one step at a time.

## Correct / Optimized Approach

The optimized approach scans left to right with one pointer:

1. Read current value `roman1`
2. Read next value `roman2`
3. If `roman1 < roman2`, subtract `roman1`
4. Otherwise, add `roman1`
5. Move one step forward

This works because subtractive symbols are naturally handled by subtracting the smaller value before a larger one.

## Why the Optimized Approach is Better

- Time Complexity:
  - Both are `O(n)`

- Space Complexity:
  - Both are `O(1)` extra space

- Correctness and Simplicity:
  - Optimized approach follows the Roman numeral rule directly.
  - No special pair-equality branch is needed.
  - Less branching and cleaner logic means lower chance of edge-case bugs.

So even with same asymptotic complexity, the optimized solution is more reliable and easier to reason about.
