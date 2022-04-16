import { BinaryHeap } from './binary-heap';

describe('BinaryHeap', () => {
  describe('Basic functioning', () => {
    const binaryHeap = new BinaryHeap();

    binaryHeap.heap = [10, 5, 20, 3, 7, 15];

    describe('getLeftIndex', () => {
      it('should return the left node index of a given node index', () => {
        expect(binaryHeap.getLeftIndex(1)).toBe(3);
      });
    });

    describe('getRightIndex', () => {
      it('should return the right node index of a given node index', () => {
        expect(binaryHeap.getRightIndex(1)).toBe(4);
      });
    });

    describe('getParentIndex', () => {
      it('should return the parent node index of a given node index', () => {
        expect(binaryHeap.getParentIndex(3)).toBe(1);
        expect(binaryHeap.getParentIndex(4)).toBe(1);
      });
    });
  });
});
