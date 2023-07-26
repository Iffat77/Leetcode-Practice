/*
Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

//Soution 1
// Time Complexity O(n)
// Space Complexity O(n)


var containsDuplicate = function(nums) {
    let arr = new Set(nums)

    return arr.size === nums.length ?  false : true 

};



//Solution 2 
//Time Complexity O(n log n)
// Space Complexity O(1)

var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b); 

  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) {
          return true; 
      }
  }

  return false; 
};
