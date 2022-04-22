import { quickSort } from './quick-sort';

describe('Quick sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    expect(quickSort(list)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
