import { heapSort } from './heap-sort';

describe('Heap sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    expect(heapSort(list)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
