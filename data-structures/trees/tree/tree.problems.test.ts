import { Node } from "../binary-search-tree/node";
import { Queue } from "../../queue/queue";

// You can find the problem descriptions in ./README.md
describe("Tree", () => {
  describe("Problem 1", () => {
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

    /**
     * Time complexity: O(n)
     * Space complexity: O(h) where h is the height of the tree
     */
    test("Solution 1", () => {
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

    /**
     * Time complexity: O(n + m)
     * Space complexity: O(n)
     */
    test("Solution 2", () => {
      // BFS solution

      const queue = new Queue<Node>();
      const output = [];

      queue.enqueue(root);

      while (!queue.isEmpty()) {
        // O(n)
        let count = queue.size;

        while (count > 0) {
          // O(m)
          const node = queue.dequeue();

          count -= 1;

          // Only push the right most node
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

  describe("Problem 2", () => {
    const root = new Node<number>(1);

    root.leftNode = new Node(2);
    root.rightNode = new Node(3);

    root.leftNode.leftNode = new Node(4);
    root.leftNode.rightNode = new Node(5);

    /*
           1
        /     \
      2        3
    /   \ 
    4     5
    */

    /**
     * Time complexity: O(n)
     * Space complexity: O(h) where h is the height of the tree ?
     */
    test("Solution 1", () => {
      // pre-order traverse
      function traverse(node: Node | null, levels: number): number {
        if (node === null) {
          return levels;
        }

        levels += 1;

        return Math.max(
          traverse(node.leftNode, levels),
          traverse(node.rightNode, levels)
        );
      }

      const height = -1;
      traverse(root, height);

      expect(traverse(root, height)).toBe(2);
    });
  });

  describe("Problem 3", () => {
    class ConnectedNode<T = number> {
      leftNode: ConnectedNode<T> | null = null;
      rightNode: ConnectedNode<T> | null = null;
      nextRight: ConnectedNode<T> | null = null;
      value: T;

      constructor(value: T) {
        this.value = value;
      }
    }

    /**
     * Time complexity:
     * Space complexity:
     */
    test("Solution 1", () => {
      //      A
      //     / \
      //    B   C
      //   / \   \
      //  D   E   F

      const root = new ConnectedNode<string>("A");

      root.leftNode = new ConnectedNode<string>("B");
      root.rightNode = new ConnectedNode<string>("C");

      root.leftNode.leftNode = new ConnectedNode<string>("D");
      root.leftNode.rightNode = new ConnectedNode<string>("E");

      root.rightNode.rightNode = new ConnectedNode<string>("F");

      //     Output Tree
      //      A--->null
      //     / \
      //    B-->C-->null
      //   / \   \
      //  D-->E-->F-->null

      const map: Record<number, ConnectedNode<string>> = {};

      function traverse(node: ConnectedNode<string> | null, level: number = 0) {
        if (node === null) {
          return;
        }

        if (map[level]) {
          map[level].nextRight = node;
        }

        map[level] = node;

        traverse(node.leftNode, level + 1);
        traverse(node.rightNode, level + 1);
      }

      traverse(root);

      expect(root.nextRight).toBeNull();

      expect(root.leftNode.nextRight?.value).toBe("C");
      expect(root.rightNode.nextRight).toBeNull();

      expect(root.leftNode.leftNode.nextRight?.value).toBe("E");
      expect(root.leftNode.rightNode.nextRight?.value).toBe("F");

      expect(root.rightNode.rightNode.nextRight).toBeNull();
    });
  });

  describe("Problem 4", () => {
    const root = new Node<number>(1);

    root.leftNode = new Node(2);
    root.rightNode = new Node(3);

    root.leftNode.leftNode = new Node(4);
    root.leftNode.rightNode = new Node(5);

    root.rightNode.leftNode = new Node(6);
    root.rightNode.rightNode = new Node(7);

    test("Solution 1", () => {
      const str = "1,2,4,#,#,5,#,#,3,6,#,#,7,#,#";

      function serialize(node: Node<number> | null, str: string = "") {
        if (node === null) {
          if (str) {
            return `${str},#`;
          } else {
            return "#";
          }
        }

        if (str) {
          str = `${str},${node.value}`;
        } else {
          str = `${node.value}`;
        }

        str = serialize(node.leftNode, str) + "," + serialize(node.rightNode);

        return str;
      }

      function deserialize(root: Node<number> | null, str: string[]) {
        const val = str.shift();

        if (!val || val === "#") {
          return null;
        }

        root = new Node<number>(Number(val));

        root.leftNode = deserialize(root.leftNode, str);
        root.rightNode = deserialize(root.rightNode, str);

        return root;
      }

      expect(serialize(root)).toBe(str);
      expect(serialize(deserialize(new Node<number>(-1), str.split(",")))).toBe(
        str
      );
    });
  });
});
