# Max heap

The max-heap allows to quickly extract the maximum value of the tree. In the max-heap each node is greater than its children, the root therefore, is the the maximum value of the tree.

```mermaid
flowchart TD
    6 --- 4
    6 --- 5
    4 --- 1
    4 --- 2
    5 --- 3
    5 -.- -1[empty]
```

## Time complexity analysis

| Operation | Time complexity |
| --------- | --------------- |
| Insert    | O(log n)        |
| Extract   | O(log n)        |

## API

- **insert(value):** Inserts a new value into the heap.
- **extract():** Removes the maximum value (max heap) and returns it.
