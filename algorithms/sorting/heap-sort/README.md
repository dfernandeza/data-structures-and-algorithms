# Heap sort

Uses the binary heap data structure. It consist of three steps:

1. Create a max heap using the input array.
2. Replace the first value (the largest value) with the last value of the heap.
3. Sift down the root of the heap and repeat #2 until the size of the heap is equal to 1.

- **Runtime:** O(n log(n))
- **Memory:**
