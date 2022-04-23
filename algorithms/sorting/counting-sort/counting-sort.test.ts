import { countingSort } from './counting-sort';

describe('Counting sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    expect(countingSort(list)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
