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

  describe.skip('Problem 1', () => {});
});
