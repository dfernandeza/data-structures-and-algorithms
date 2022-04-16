# Min heap

The min-heap allows to quickly extract the minimum value of the tree. In the min-heap each node is smaller than its children, the root therefore, is the the minimum value of the tree.

```mermaid
flowchart TD
    1 --- 2
    1 --- 3
    2 --- 4
    2 --- 5
    3 --- 6
    3 -.- -1[empty]
```

## Time complexity analysis

| Operation | Time complexity |
| --------- | --------------- |
| Insert    | O(log n)        |
| Extract   | O(log n)        |

## API

- **insert(value):** Inserts a new value into the heap.
- **extract():** Removes the minimum value (min heap) and returns it.
