import { Node } from './node';

export class DoublyLinkedList<T = number> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  size = 0;

  /**
   * Add an element to the end of the linked list
   */
  push(value: T) {
    this.insert(value, this.size);
  }

  /**
   * Inserts a new element at the specified position
   */
  insert(value: T, index: number) {
    if (index < 0 || index > this.size) {
      return;
    }

    const node = new Node(value);

    // insert in the head
    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.size++;

        return;
      }

      const temp = this.head;

      this.head = node;
      this.head.next = temp;
      this.head.next.prev = this.head;

      this.size++;

      return;
    }

    // insert in the tail
    if (index === this.size) {
      const temp = this.tail;

      this.tail = node;
      this.tail.prev = temp;

      if (this.tail.prev) {
        this.tail.prev.next = this.tail;
      }

      this.size++;

      return;
    }

    const current = this.at(index - 1);

    if (current) {
      const temp = current.next;
      current.next = node;
      current.next.prev = current;
      node.next = temp;

      if (temp) {
        temp.prev = node;
      }

      this.size++;
    }
  }

  /**
   * Remove and return the last element from the linked list
   */
  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.size === 1) {
      const temp = this.head;
      this.removeAt(0);

      return temp;
    }

    const current = this.tail?.prev;

    if (current) {
      const temp = this.tail;

      this.tail = current;
      current.next = null;

      if (temp) {
        temp.prev = null;
      }

      this.size--;

      return temp;
    }

    return null;
  }

  /**
   * Return an element from a given index (but don't remove it)
   */
  at(index: number) {
    if (index < 0 || index > this.size || this.head === null) return null;

    if (index === 0) return this.head;

    let current = this.head.next;
    let currentIndex = 1;
    while (current && index !== currentIndex) {
      current = current.next;
      currentIndex++;
    }

    return current;
  }

  /**
   * Removes an element from the the list
   */
  remove(value: T) {
    if (this.head === null || this.tail === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    if (this.tail.value === value) {
      this.pop();
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      if (current.next) {
        current.next.prev = current;
      }

      this.size--;
    }
  }

  /**
   * Removes an element from the specified position in the list
   */
  removeAt(index: number) {
    if (index < 0 || index > this.size || this.head === null) return null;

    if (index === 0) {
      // delete head
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      }

      if (this.size === 1) {
        this.tail = null;
      }

      this.size--;

      return;
    }

    if (index === this.size - 1) {
      // delete the tail
      this.pop();

      return;
    }

    const current = this.at(index - 1);

    if (current && current.next) {
      current.next = current.next.next;

      if (current.next) {
        current.next.prev = current;
      }

      this.size--;
    }
  }

  /**
   * Return a boolean indicating whether the list is empty
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Return a string representation of the list
   */
  toString() {
    if (this.head === null) {
      return '';
    }

    let current = this.head;
    let str = `(${current.value}) <-> `;

    while (current.next) {
      current = current.next;
      str = str + `(${current.value}) <-> `;
    }

    return str;
  }
}
