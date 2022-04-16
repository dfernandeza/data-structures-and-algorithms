import { MinHeap } from './min-heap';

describe('MinHeap', () => {
  describe('Basic functioning', () => {
    describe('insert', () => {
      const minHeap = new MinHeap();

      it('should insert new values into the heap', () => {
        minHeap.insert(2);
        minHeap.insert(3);
        minHeap.insert(4);
        minHeap.insert(5);
        minHeap.insert(1);

        expect(minHeap.heap).toStrictEqual([1, 2, 4, 5, 3]);
      });
    });

    describe('extract', () => {
      const minHeap = new MinHeap();

      for (let i = 1; i < 10; i++) {
        minHeap.insert(i);
      }

      it('should remove and return the minimum value (root)', () => {
        expect(minHeap.heap).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(minHeap.extract()).toBe(1);
        expect(minHeap.heap).toStrictEqual([2, 4, 3, 8, 5, 6, 7, 9]);
      });
    });
  });
});
