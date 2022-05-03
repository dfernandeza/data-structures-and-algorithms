# Queues 🛒

Think of a queue like a queue in the supermarket 🛒. A queue implements FIFO (first in first out) ordering. Items are remove in the same order that they are added.

## Time complexity analysis

| Operation          | Time complexity |
| ------------------ | --------------- |
| Access nth element | O(N)            |
| Insert             | O(1)            |
| Delete             | O(1)            |

## API

- **enqueue(item):** Adds an item to the queue. If the queue is full, then it is said to be an Overflow condition.
- **dequeue:** Removes an item from the queue. The items are popped in the same order in which they are pushed. If the queue is empty, then it is said to be an Underflow condition.
- **peek:** Get the front item from queue.
- **isEmpty:** Returns true if the queue is empty, else false.

## Coding problems
