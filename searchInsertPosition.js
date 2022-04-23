var searchInsert = function (nums, target) {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
             index += 1; 
            }
    }
    return index;
};
// console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2))

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 *  1<7=true;1
 *  3<7=true;2
 *  5<7=true;3
 *  6<7=true;4
 */