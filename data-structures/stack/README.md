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

## Coding problems

<details>
  <summary>Problem 1. Sort stack</summary>
  
  Sort a stack in ascending order (with smallest items on top). You may use at most one additional stack to hold items, but you may not copy the elements into any other data structure (e.g. array).
</details>

<details>
  <summary>Problem 2. Base converter</summary>
  
  Write a converter from decimal to the bases between 2 and 36
</details>
