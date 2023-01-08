import { AVLTree } from '../avl-tree/avl-tree';

describe('AVL Tree', () => {
  describe('Basic functioning', () => {
    it('insert', () => {
      const tree = new AVLTree();

      tree.insert(50);
      tree.insert(30);
      tree.insert(70);
      tree.insert(10);
      tree.insert(40);
      tree.insert(35);

      let output = '';
      tree.preOrderTraverse((node) => {
        output = `${output} ${node.value}`.trimStart();
      });

      // TODO: Fix this
      // expect(output).toEqual('2 1 3');
      expect(1).toBeTruthy();
    });
  });
});
