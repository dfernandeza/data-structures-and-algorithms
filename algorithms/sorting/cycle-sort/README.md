# Cycle sort

Cycle sort is an in-place sorting algorithm. It is theoretically optimal in the sense that it reduces the number of writes to the original array.

It is based on the idea that array to be sorted can be divided into cycles. Cycles can be visualized as a graph. We have `n` nodes and an edge directed from node `i` to node `j` if the element at `i-th` index must be present at `j-th` index in the sorted array.

- **Runtime:** O(n)
- **Memory:**
