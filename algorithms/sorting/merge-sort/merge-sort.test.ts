import { mergeSort } from './merge-sort';

describe('Merge sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    expect(mergeSort(list)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
