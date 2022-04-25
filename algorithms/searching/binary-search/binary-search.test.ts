import { binarySearch } from './binary-search';

describe('Binary search', () => {
  const list = [1, 2, 3, 4, 5, 6];

  it('finds an element in the list and returns its index', () => {
    expect(binarySearch(list, 5)).toBe(4);
  });

  it('returns its -1 when the element is not found', () => {
    expect(binarySearch(list, 7)).toBe(-1);
  });
});
