import { radixSort } from './radix-sort';

describe('Radix sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    radixSort(list);

    expect(list).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
