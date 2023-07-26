/* 

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

//Soution 1
// Time Complexity O(n log n)
// Space Complexity O(n)

var isAnagram = function(s, t) {
  let str1  = s.split('').sort().join('')
  let str2 = t.split('').sort().join('')
  return str1 === str2 ? true : false

};