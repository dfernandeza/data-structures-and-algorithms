import { MaxHeap } from './max-heap';

describe('MaxHeap', () => {
  describe('Basic functioning', () => {
    describe('insert', () => {
      const maxHeap = new MaxHeap();

      it('should insert new values into the heap', () => {
        maxHeap.insert(2);
        maxHeap.insert(3);
        maxHeap.insert(4);
        maxHeap.insert(5);
        maxHeap.insert(1);

        expect(maxHeap.heap).toStrictEqual([5, 4, 3, 2, 1]);
      });
    });

    describe('extract', () => {
      const maxHeap = new MaxHeap();

      for (let i = 1; i < 10; i++) {
        maxHeap.insert(i);
      }

      it('should remove and return the maximum value (root)', () => {
        expect(maxHeap.heap).toStrictEqual([9, 8, 6, 7, 3, 2, 5, 1, 4]);
        expect(maxHeap.extract()).toBe(9);
        expect(maxHeap.heap).toStrictEqual([8, 7, 6, 4, 3, 2, 5, 1]);
      });
    });
  });
});
