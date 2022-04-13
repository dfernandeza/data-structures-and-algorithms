import { BinarySearchTree } from './binary-search-tree';

describe('Binary Search Tree', () => {
  describe('Basic functioning', () => {
    const bst = new BinarySearchTree();

    it('insert', () => {
      bst.insert(11);
      bst.insert(7);
      bst.insert(15);
      bst.insert(5);
      bst.insert(3);
      bst.insert(9);
      bst.insert(8);
      bst.insert(10);
      bst.insert(13);
      bst.insert(12);
      bst.insert(14);
      bst.insert(20);
      bst.insert(18);
      bst.insert(25);
      bst.insert(6);

      expect(bst.root?.value).toBe(11);
      expect(bst.root?.leftNode?.value).toBe(7);
      expect(bst.root?.leftNode?.leftNode?.value).toBe(5);
      expect(bst.root?.leftNode?.rightNode?.value).toBe(9);
      expect(bst.root?.rightNode?.value).toBe(15);
      expect(bst.root?.rightNode?.leftNode?.value).toBe(13);
      expect(bst.root?.rightNode?.rightNode?.value).toBe(20);
    });

    it('inOrderTraverse', () => {
      const output: number[] = [];

      bst.inOrderTraverse((node) => output.push(node.value));

      expect(output.join(',')).toBe('3,5,6,7,8,9,10,11,12,13,14,15,18,20,25');
    });

    it('preOrderTraverse', () => {
      const output: number[] = [];

      bst.preOrderTraverse((node) => output.push(node.value));

      expect(output.join(',')).toBe('11,7,5,3,6,9,8,10,15,13,12,14,20,18,25');
    });

    it('postOrderTraverse', () => {
      const output: number[] = [];

      bst.postOrderTraverse((node) => output.push(node.value));

      expect(output.join(',')).toBe('3,6,5,8,10,9,7,12,14,13,18,25,20,15,11');
    });

    it('search', () => {
      expect(bst.search(42)).toBe(false);
      expect(bst.search(13)).toBe(true);
      expect(bst.search(8)).toBe(true);
    });

    it('min', () => {
      expect(bst.min()).toBe(3);
    });

    it('max', () => {
      expect(bst.max()).toBe(25);
    });

    // TODO
    it.skip('remove', () => {
      expect(true).toBe(true);
    });
  });
});
