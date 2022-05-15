import { Node } from '../binary-search-tree/node';
import { Queue } from '../../queue/queue';

// You can find the problem descriptions in ./README.md
describe('Tree', () => {
  describe('Problem 1', () => {
    const root = new Node<number>(1);

    root.leftNode = new Node(2);
    root.rightNode = new Node(3);

    root.leftNode.leftNode = new Node(4);
    root.leftNode.rightNode = new Node(5);

    root.rightNode.leftNode = new Node(6);
    root.rightNode.rightNode = new Node(7);

    root.rightNode.leftNode.rightNode = new Node(8);

    /*
           1
        /     \
      2        3
    /   \     /  \
    4     5   6    7
                \
                  8
    */

    test('Solution 1', () => {
      // Using pre-order traversal
      function traverse(
        node: Node | null,
        level: number,
        map: Record<number, number>
      ) {
        if (node === null) {
          return;
        }

        // As we are using a map this means we will always store the latest value on the level
        // i.e. If in level 1 the left node has a value of 2 and the right node a value of 3 then,
        // 3 will override 2 for level 1.
        map[level] = node.value;

        traverse(node.leftNode, level + 1, map);
        traverse(node.rightNode, level + 1, map);
      }

      const output = {};
      traverse(root, 1, output);

      expect(Object.values(output)).toStrictEqual([1, 3, 7, 8]);
    });

    test('Solution 2', () => {
      // BFS solution

      const queue = new Queue<Node>();
      const output = [];

      queue.enqueue(root);

      while (!queue.isEmpty()) {
        let count = queue.size;

        while (count > 0) {
          const node = queue.dequeue();

          count -= 1;

          if (count === 0) {
            output.push(node?.value);
          }

          if (node?.leftNode) {
            queue.enqueue(node.leftNode);
          }

          if (node?.rightNode) {
            queue.enqueue(node.rightNode);
          }
        }
      }

      expect(output).toStrictEqual([1, 3, 7, 8]);
    });
  });
});
