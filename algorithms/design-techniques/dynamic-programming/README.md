# Dynamic programming (DP)

It breaks the problem into **dependent** subproblems.

"Whenever we have recursive function calls with the same result, instead of calling them again we try to store the result in a data structure in the form of a table and retrieve the results from the table. Thus, the overall time complexity is reduced. 'Dynamic' means we dynamically decide, whether to call a function or retrieve values from the table."
-- Excerpt from: https://www.geeksforgeeks.org/algorithms-design-techniques/

## Coding problems

<details>
  <summary>Problem 1. Longest common subsequence</summary>
  
  Given two sequences, find the length of longest subsequence present in both of them. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. 
  For example, `abc`, `abg`, `bdf`, `aeg`, `acefg`, etc, are subsequences of `abcdefg`. 
</details>
