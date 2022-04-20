import { insertionSort } from './insertion-sort';

describe('Insertion sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    insertionSort(list);

    expect(list).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
