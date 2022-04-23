# Counting sort

Counting sort is a distribution sort algorithm (like bucket sort). It uses a temporary array that stores how many times the element appears in the original array. After it counts all the elements, the temporary array will be sorted and can be used to construct the final sorted array.

- **Runtime:** O(k + n) (where k is the size of the temporary counting array)
- **Memory:**
