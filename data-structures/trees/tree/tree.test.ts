import { Tree } from './tree';

describe('Tree', () => {
  describe('Basic functioning', () => {
    const tree = new Tree('root');

    it('insert', () => {
      tree.insert('root', 'A');
      tree.insert('root', 'B');
      tree.insert('A', 'C');

      expect(tree.root?.children.map((c) => c.value).join(' ')).toBe('A B');

      const A = tree.root?.children[0];
      expect(A?.children.map((c) => c.value).join(' ')).toBe('C');

      const B = tree.root?.children[1];
      expect(B?.children.map((c) => c.value).join(' ')).toBe('');
    });

    it('search', () => {
      expect(tree.search('A')?.value).toBe('A');
      expect(tree.search('D')).toBeUndefined();
    });
  });
});
