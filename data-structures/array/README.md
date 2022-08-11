# Arrays

The array data structure is use to store a collection of elements and provides a very convenient way of accessing these elements `array[]`. Arrays have a fixed size thought, meaning that adding and removing element from the beginning or the middle of the array could be an expensive operation as the elements need to be shifted over.

> How exactly arrays are implemented depends on the specific JavaScript interpreter or VM. The following explanation assumes we are using the V8 JavaScript engine.

In JavaScript, arrays are in fact dynamic meaning that the array will automatically resize. When adding an extra item to an existing array, for instance by calling `Array.prototype.push()`, the engine will allocate a new, bigger array, copy the existing elements over, and then add the new value.

_The above won't be true for "sparse" arrays, (arrays are arrays with a lot of empty spots in the middle) in which case the array will be treated by the engine as a hash map._

One last important thing to mention is that JavaScript array implementation defers from other languages in the sense that you can create an array that contains multiple different data types.

## Time complexity analysis

| Operation          | Time complexity |
| ------------------ | --------------- |
| Access nth element | O(1)            |
| Insert             | O(N)            |
| Delete             | O(N)            |

## Coding problems

<details>
  <summary>Problem 1. Rotate matrix</summary>
  
  Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
</details>

<details>
  <summary>Problem 2. Next greater element</summary>
  
  Given an array of integers, write a program to return the next greater element for each element in the array. The array comprises all distinct numbers. If a greater element doesn’t exist to the right of a given element, the value returned in that position should be -1.
  
  Example, for `[4, 5, 2, 25]`, the next greater elements for each element are as follows.
  ```text
    4  -> 5
    5  -> 25
    2  -> 25
    25 -> -1
  ```
</details>

<details>
  <summary>Problem 3. Merge sorted arrays</summary>
  
  You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.
  
  Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.
  
  The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.
  
  Example:
  
  ```text
  Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
  Output: [1, 2, 2, 3, 5, 6]
  ```
</details>

<details>
  <summary>Problem 4. Find number of pairs</summary>
  
  Given two arrays `X[]` and `Y[]` of positive integers, find a number of pairs such that `x^y > y^x` where `x` is an element from `X[]` and `y` is an element from `Y[]`.
  
  ```text
  Input: X[] = [2, 1, 6], Y = [1, 5]
  Output: 3
  
  Explanation: There are total 3 pairs where pow(x, y) is greater than pow(y, x) Pairs are (2, 1), (2, 5) and (6, 1)
  ```
</details>
