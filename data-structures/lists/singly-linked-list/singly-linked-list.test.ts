import { SinglyLinkedList } from './singly-linked-list';

describe('Singly-linked List', () => {
  describe('Basic functioning', () => {
    const list = new SinglyLinkedList();

    describe('push', () => {
      it('should push elements to the end', () => {
        list.push(9);
        list.push(5);
        list.push(27);
        list.push(4);

        expect(list.toString()).toBe('(9) -> (5) -> (27) -> (4) -> ');
      });
    });

    describe('insert', () => {
      it('should correctly insert an element in the first position', () => {
        list.insert(1, 0);
        expect(list.toString()).toBe('(1) -> (9) -> (5) -> (27) -> (4) -> ');
      });

      it('should correctly insert an element in the last position', () => {
        list.insert(10, list.size - 1);
        expect(list.toString()).toBe(
          '(1) -> (9) -> (5) -> (27) -> (10) -> (4) -> '
        );
      });

      it('should correctly insert an element in any other position', () => {
        list.insert(18, 2);
        expect(list.toString()).toBe(
          '(1) -> (9) -> (18) -> (5) -> (27) -> (10) -> (4) -> '
        );
      });
    });

    describe('pop', () => {
      it('should pop elements from the end', () => {
        const pop1 = list.pop();
        const pop2 = list.pop();

        expect(pop1?.value).toBe(4);
        expect(pop2?.value).toBe(10);

        expect(list.toString()).toBe('(1) -> (9) -> (18) -> (5) -> (27) -> ');
      });
    });

    describe('at', () => {
      it('should return an element from a given index', () => {
        expect(list.at(0)?.value).toBe(1); // start
        expect(list.at(list.size - 1)?.value).toBe(27); // end
        expect(list.at(2)?.value).toBe(18); // any other index
        expect(list.toString()).toBe('(1) -> (9) -> (18) -> (5) -> (27) -> ');
      });
    });

    describe('remove', () => {
      it('should remove an element from the  list', () => {
        list.remove(1); // start
        list.remove(27); // end
        list.remove(100); // non-existing
        list.remove(18); // any other

        expect(list.toString()).toBe('(9) -> (5) -> ');
      });
    });

    describe('removeAt', () => {
      it('should remove an element from the specified position in the list', () => {
        list.push(1);
        list.push(27);
        list.push(100);
        list.push(18);

        list.removeAt(0); // remove head
        list.removeAt(list.size - 1); // remove tail
        list.removeAt(2); // any other index

        expect(list.toString()).toBe('(5) -> (1) -> (100) -> ');
      });
    });

    describe('isEmpty', () => {
      it('should return a boolean indicating whether the list is empty or not', () => {
        expect(list.isEmpty()).toBe(false);

        // flush the list
        let current = list.head;
        while (current) {
          current = list.pop();
        }

        expect(list.isEmpty()).toBe(true);
      });
    });
  });

  describe('Partition: partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. IMPORTANT: x can appear anywhere in the "right partition; it does not need to appear between the left and right partitions."', () => {
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
