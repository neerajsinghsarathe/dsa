/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

Current Solution: 

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        const lastIndex = arr.length - 1;
        if (["(", "{", "["].includes(s[i])) {
            arr.push(s[i]);
        }
        else if (arr[lastIndex] === "(" && s[i] === ")") {
            arr.pop();
        }
        else if (arr[lastIndex] === "{" && s[i] === "}") {
            arr.pop();
        }
        else if (arr[lastIndex] === "[" && s[i] === "]") {
            arr.pop();
        }
    }
    if (!arr.length) {
        return true;
    }
    return false;
};

Optimized Solution:

var isValid = function (s) {
    const stack = [];
    const closeToOpen = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const c of s) {
        if (c in closeToOpen) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
};