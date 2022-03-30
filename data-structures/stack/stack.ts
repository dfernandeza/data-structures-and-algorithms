import { SinglyLinkedList } from '../lists/singly-linked-list/singly-linked-list';

export class Stack {
  #stack = new SinglyLinkedList();

  /**
   * Adds an item in the stack.
   * @param item
   */
  push(item: number) {
    this.#stack.push(item);
  }

  /**
   * Removes an item from the stack.
   * @returns top/removed element of stack
   */
  pop() {
    return this.#stack.pop()?.value;
  }

  /**
   * Returns top element of stack.
   */
  peek() {
    return this.#stack.at(this.size - 1)?.value;
  }

  /**
   *  Returns true if stack is empty, else false.
   */
  isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.#stack.size;
  }

  toString() {
    if (this.#stack.head === null) {
      return '';
    }

    let current = this.#stack.head;
    let str = `[${current.value}]`;
    while (current.next) {
      current = current.next;
      str = str + `[${current.value}]`;
    }

    return str;
  }
}
