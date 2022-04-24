import { linearSearch } from './linear-search';

describe('Linear search', () => {
  const list = [3, 4, 5, 6, 2, 1];

  it('finds an element in the list and returns its index', () => {
    expect(linearSearch(list, 2)).toBe(4);
  });

  it('returns its -1 when the element is not found', () => {
    expect(linearSearch(list, 7)).toBe(-1);
  });
});
