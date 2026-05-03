/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists. */

My solution 1:

var twoSum = function (nums, target) {
    let p1 = 0;
    let nums_length = nums.length;
    let p2 = p1 + 1;

    do {
        const current_val = nums[p1] + nums[p2];
        if (current_val < target) {
            p1 += 1;
            p2 += 1;
        } else if (current_val >= target) {
            return [p1, p2];
        }

    } while (p2 !== nums_length);

};


Correct Solution:

var twoSum = function (nums, target) {
    let hash = {};

    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i]; 
        if (diff in hash ) {
            return [hash[diff], i];
        } else { 
            hash[nums[i]] = i;
        }
    }

};

