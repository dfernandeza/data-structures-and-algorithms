# Divide and conquer

Divides the problem into sub-problems, recursively solves them, and then recombines them into the solution for the original problem.

Examples: Quick sort, Merge sort, Binary search (recursive)

## Coding problems

<details>
  <summary>Problem 1. Maximum subarray sum</summary>
  
  You are given a one dimensional array that may contain both positive and negative integers, find the sum of contiguous subarray of numbers which has the largest sum.
  
  For example for array `[-2, -5, 6, -2, -3, 1, 5, -6]`, the maximum subarray sum will be `7` which is the sum of the elements `6, -2, -3, 1, 5`.
</details>

<details>
  <summary>Problem 2. Inversion Count</summary>
  
  Given an array of integers. Find the Inversion Count in the array.
  
  Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum.
  
  Formally, two elements `a[i]` and `a[j]` form an inversion if `a[i] > a[j]` and `i < j`.
</details>
