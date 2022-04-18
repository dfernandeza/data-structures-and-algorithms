import { selectionSort } from './selection-sort';

describe('Bubble sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    selectionSort(list);

    expect(list).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
