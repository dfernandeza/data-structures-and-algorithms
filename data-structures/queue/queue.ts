import { SinglyLinkedList } from '../lists/singly-linked-list/singly-linked-list';

export class Queue<T = number> {
  #queue = new SinglyLinkedList<T>();

  /**
   * Adds an item to the queue.
   * @param item
   */
  enqueue(item: T) {
    this.#queue.push(item);
  }

  /**
   * Removes an item from the queue.
   */
  dequeue() {
    const head = this.#queue.head;
    this.#queue.removeAt(0);

    return head?.value;
  }

  /**
   * Get the front item from queue.
   */
  peek() {
    return this.#queue.head?.value;
  }

  /**
   *  Returns true if queue is empty, else false.
   */
  isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.#queue.size;
  }

  toString() {
    if (this.#queue.head === null) {
      return '';
    }

    let current = this.#queue.head;
    let str = `[${current.value}]`;
    while (current.next) {
      current = current.next;
      str = `[${current.value}]` + str;
    }

    return str;
  }
}
