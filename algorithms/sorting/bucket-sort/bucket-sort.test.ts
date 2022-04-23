import { bucketSort } from './bucket-sort';

describe('Bucket sort', () => {
  it('sorts', () => {
    const list = [3, 4, 5, 6, 2, 1];

    expect(bucketSort(list, 2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
