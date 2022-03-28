import { SinglyLinkedList } from './singly-linked-list';

describe('Singly-linked list problems', () => {
  describe('Partition: partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. IMPORTANT: x can appear anywhere in the "right partition; it does not need to appear between the left and right partitions."', () => {
    /**
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
    test('Solution 1', () => {
      const list = new SinglyLinkedList();

      list.push(3);
      list.push(5);
      list.push(8);
      list.push(5);
      list.push(10);
      list.push(2);
      list.push(1);

      const x = 5;

      let current = list.head;
      for (let i = 0; current?.next; i++) {
        const next = current.next;

        if (current.next.value < x) {
          current.next = next.next;

          // move it to the left
          const temp = list.head;
          list.head = next;
          next.next = temp;
        } else {
          current = next;
        }
      }

      expect(list.toString()).toBe(
        '(1) -> (2) -> (3) -> (5) -> (8) -> (5) -> (10) -> '
      );
    });
  });

  describe('Sum List: Having 2 number represented by a linked list, where each node contains a single digit. The digits are stored in reverse order. Write a function that adds them and return the sum as a linked list.', () => {
    /**
     * Time complexity: O(n * m)
     * Space complexity: O(n)
     */
    test('Solution 1', () => {
      // TODO: implement this using recursion

      const n1 = new SinglyLinkedList();
      const n2 = new SinglyLinkedList();

      // 617
      n1.push(7);
      n1.push(1);
      n1.push(6);

      // 295
      n2.push(5);
      n2.push(9);
      n2.push(2);

      // 912
      const output = new SinglyLinkedList();

      let current1 = n1.head;
      let current2 = n2.head;
      let rest = 0;

      while (current1) {
        if (current2) {
          rest = current1.value + current2.value + rest;

          if (rest >= 10) {
            output.push(rest % 10);
            rest = Math.floor(rest / 10);
          } else {
            output.push(rest);
          }

          current1 = current1.next;
          current2 = current2.next;
        } else {
          output.push(current1.value);
          current1 = current1.next;
        }
      }

      expect(output.toString()).toBe('(2) -> (1) -> (9) -> ');
    });
  });
});
