import { BinarySearchTree } from '../binary-search-tree/binary-search-tree';
import { Node } from '../binary-search-tree/node';

const BALANCE_FACTOR = {
  unbalancedRight: 1,
  slightlyUnbalancedRight: 2,
  balanced: 3,
  slightlyUnbalancedLeft: 4,
  unbalancedLeft: 5,
} as const;

export class AVLTree<T = number> extends BinarySearchTree<T> {
  insert(key: T) {
    if (this.root === null) {
      this.root = new Node(key);

      return true;
    }

    const insertUnder = (node: Node<T>, key: T) => {
      if (key < node.value) {
        // key should go to the left
        if (node.leftNode === null) {
          node.leftNode = new Node(key);
        } else {
          insertUnder(node.leftNode, key);
        }
      } else {
        // key should go to the right
        if (node.rightNode === null) {
          node.rightNode = new Node(key);
        } else {
          insertUnder(node.rightNode, key);
        }
      }

      // Balance the tree if needed.
      // Calculate the balance factor For every node from the node that was inserted
      // to the tree root recursively and apply the correct rotation for each case.
      const balanceFactor = this.#getBalanceFactor(node);

      if (balanceFactor === BALANCE_FACTOR.unbalancedLeft) {
        // Compare whether the inserted key is lesser that the left child's key
        if (node.leftNode && key < node.leftNode.value) {
          node = this.#leftLeftRotation(node)!;
        } else {
          // LR rotation
          this.#leftRightRotation(node);
        }

        return true;
      }

      if (balanceFactor === BALANCE_FACTOR.unbalancedRight) {
        if (node.rightNode && key > node.rightNode.value) {
          node = this.#rightRightRotation(node)!;
        } else {
          this.#rightLeftRotation(node);
        }

        return true;
      }
    };

    return insertUnder(this.root, key);
  }

  remove(key: T) {
    // TODO: Implement self balancing logic
    return super.remove(key);
  }

  #getNodeHeight(node: Node<T> | null): number {
    if (node === null) {
      return -1;
    }

    return (
      Math.max(
        this.#getNodeHeight(node.leftNode),
        this.#getNodeHeight(node.rightNode)
      ) + 1
    );
  }

  /**
   * Difference between the height of the right-hand side node and the left-hand side node.
   */
  #getBalanceFactor(node: Node<T>) {
    const heightDifference =
      this.#getNodeHeight(node.rightNode) - this.#getNodeHeight(node.leftNode);

    if (heightDifference === -2) {
      return BALANCE_FACTOR.unbalancedRight;
    }

    if (heightDifference === -1) {
      return BALANCE_FACTOR.slightlyUnbalancedRight;
    }

    if (heightDifference === 1) {
      return BALANCE_FACTOR.slightlyUnbalancedLeft;
    }

    if (heightDifference === 2) {
      return BALANCE_FACTOR.unbalancedLeft;
    }

    return BALANCE_FACTOR.balanced;
  }

  #leftLeftRotation(node: Node<T> | null) {
    if (!node) {
      return null;
    }

    const temp = node.leftNode;
    node.leftNode = temp?.rightNode ?? null;
    temp && (temp.rightNode = node);

    return temp;
  }

  #rightRightRotation(node: Node<T> | null) {
    if (!node) {
      return null;
    }

    const temp = node.rightNode;
    node.rightNode = temp?.leftNode ?? null;
    temp && (temp.leftNode = node);

    return temp;
  }

  #leftRightRotation(node: Node<T>) {
    node.leftNode = this.#rightRightRotation(node.leftNode);
    return this.#leftLeftRotation(node);
  }

  #rightLeftRotation(node: Node<T>) {
    node.rightNode = this.#leftLeftRotation(node.rightNode);
    return this.#rightRightRotation(node);
  }
}
