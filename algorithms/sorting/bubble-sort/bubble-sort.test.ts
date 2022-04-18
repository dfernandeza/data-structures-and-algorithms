import { bubbleSort } from './bubble-sort';

describe('Bubble sort', () => {
  it('sorts', () => {
    expect(bubbleSort([3, 4, 5, 6, 2, 1])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
