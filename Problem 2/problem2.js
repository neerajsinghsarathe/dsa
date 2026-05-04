/* 
Given an integer x, return true if x is a palindrome, and false otherwise.


Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

 */

Current Solution:

var isPalindrome = function (x) {
    const str_x = x.toString();
    const str_len = str_x.length;
    const isEven = str_len % 2;

    let p1 = 0;
    let p2 = str_len - 1;
    const cond = isEven ? p1 + 1 === p2 : p1 === p2;
    do {
        if (str_x[p1] !== str_x[p2]) {
            return false;
        }
        p1 = p1 + 1;
        p2 = p2 - 1;
    } while (cond);
    return true;
};

Optimized Solution:

var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // x === reversed handles even digits (e.g. 1221)
    // x === Math.floor(reversed / 10) handles odd digits (e.g. 121, middle digit doesn't matter)
    return x === reversed || x === Math.floor(reversed / 10);
};