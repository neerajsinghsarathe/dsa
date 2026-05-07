# Problem 5

## My Approach (in `problem5.js`)

I used an array as a stack:

- If the current character is an opening bracket, push it
- If it is a closing bracket, compare it with the last pushed opening bracket
- If they match, pop from the stack
- At the end, return `true` if the stack is empty

### What this approach is trying to do

This is the correct general idea for the Valid Parentheses problem.  
A stack is the standard data structure here because brackets must close in reverse order of opening.

### Weakness in current implementation

The main issue is that invalid closing brackets are not rejected immediately.

Example:
- Input: `"(]"`
- `(` gets pushed
- `]` does not match `(`
- But the code does not return `false` at that point
- It simply continues

This still ends with a non-empty stack, so some invalid cases are caught indirectly.  
However, the logic is incomplete because a mismatched closing bracket should fail immediately when it appears.

## Correct / Optimized Approach

The optimized solution also uses a stack, but it stores bracket relationships in a map:

1. Create a mapping from closing bracket to opening bracket
2. For each character:
   - If it is a closing bracket, check whether the stack top matches its expected opening bracket
   - If not, return `false`
   - Otherwise pop the stack
3. If it is an opening bracket, push it
4. At the end, return whether the stack is empty

## Why the Optimized Approach is Better

- Time Complexity:
  - Both solutions are `O(n)`

- Space Complexity:
  - Both solutions are `O(n)` in the worst case

- Correctness:
  - The optimized version rejects bad input immediately.
  - It handles mismatch cases explicitly instead of relying only on the final stack state.

- Maintainability:
  - Using a `closeToOpen` map avoids repeating separate `if` conditions for each bracket type.
  - The logic is shorter, cleaner, and easier to extend.

So your solution uses the right core idea, but the optimized version is more robust because it handles invalid closing brackets directly and keeps the matching logic cleaner.
