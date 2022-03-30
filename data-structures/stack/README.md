# Stacks 🥞

Think of a stack like a stack of 🥞. A stack uses LIFO (last in first out) or FILO (First In Last Out) ordering.

## Time complexity analysis

| Operation          | Time complexity |
| ------------------ | --------------- |
| Access nth element | O(N)            |
| Insert             | O(1)            |
| Delete             | O(1)            |

## API

- **pop:** Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an underflow condition.
- **push(item):** Adds an item in the stack. If the stack is full, then it is said to be an overflow condition.
- **peek:** Returns top element of stack.
- **isEmpty:** Returns true if the stack is empty, else false.
