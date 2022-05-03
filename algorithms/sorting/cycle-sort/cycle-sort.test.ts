import { cycleSort } from './cycle-sort';

describe('Cycle sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    cycleSort(list);

    expect(list).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
