import { Node } from './node';

export class BinarySearchTree<T = number> {
  root: Node<T> | null = null;

  insert(key: T) {
    if (this.root === null) {
      this.root = new Node(key);

      return true;
    }

    function insertUnder(node: Node<T>, key: T) {
      if (key < node.value) {
        // key should go to the left
        if (node.leftNode === null) {
          node.leftNode = new Node(key);

          return true;
        } else {
          insertUnder(node.leftNode, key);
        }
      } else {
        // key should go to the right
        if (node.rightNode === null) {
          node.rightNode = new Node(key);

          return true;
        } else {
          insertUnder(node.rightNode, key);
        }
      }
    }

    return insertUnder(this.root, key);
  }

  inOrderTraverse(callback: (node: Node<T>) => void) {
    function visit(node: Node<T> | null) {
      if (node === null) {
        return;
      }

      visit(node.leftNode);
      callback(node);
      visit(node.rightNode);
    }

    visit(this.root);
  }

  preOrderTraverse(callback: (node: Node<T>) => void) {
    function visit(node: Node<T> | null) {
      if (node === null) {
        return;
      }

      callback(node);
      visit(node.leftNode);
      visit(node.rightNode);
    }

    visit(this.root);
  }

  postOrderTraverse(callback: (node: Node<T>) => void) {
    function visit(node: Node<T> | null) {
      if (node === null) {
        return;
      }

      visit(node.leftNode);
      visit(node.rightNode);
      callback(node);
    }

    visit(this.root);
  }

  search(key: T) {
    function searchUnder(node: Node<T> | null, key: T): boolean {
      if (node === null) {
        return false;
      }

      if (key === node.value) {
        return true;
      }

      if (key < node.value) {
        return searchUnder(node.leftNode, key);
      }

      return searchUnder(node.rightNode, key);
    }

    return searchUnder(this.root, key);
  }

  min() {
    if (this.root === null) {
      return;
    }

    let node = this.root;

    while (node.leftNode !== null) {
      node = node.leftNode;
    }

    return node.value;
  }

  max() {
    if (this.root === null) {
      return;
    }

    let node = this.root;

    while (node.rightNode !== null) {
      node = node.rightNode;
    }

    return node.value;
  }

  remove(key: T) {
    function removeFrom(
      parent: Node<T>,
      node: Node<T> | null,
      key: T
    ): boolean {
      if (node === null) {
        return false;
      }

      if (key === node.value) {
        // Remove a leaf node
        if (node.leftNode === null && node.rightNode === null) {
          if (key < parent.value) {
            parent.leftNode = null;
          } else {
            parent.rightNode = null;
          }

          return true;
        }

        // Remove a node with left OR right child
        if (node.leftNode !== null) {
          if (node.value < parent.value) {
            parent.leftNode = node.leftNode;
          } else {
            parent.rightNode = node.leftNode;
          }
        }

        if (node.rightNode !== null) {
          if (node.value < parent.value) {
            parent.leftNode = node.rightNode;
          } else {
            parent.rightNode = node.rightNode;
          }
        }

        // Remove a node with two children
        let current = node.rightNode;

        // Find the minimum node from the node right-hand side
        while (current?.leftNode) {
          current = current.leftNode;
        }

        // Replace the key of the value with the key of the minimum node (this means the node is removed)
        node.value = current?.value as T;

        // Remove the minimum node from the right subtree as it will be duplicated now
        return removeFrom(node, node.rightNode, current?.value as T);
      }

      if (key < node.value) {
        return removeFrom(node, node.leftNode, key);
      }

      if (key > node.value) {
        return removeFrom(node, node.rightNode, key);
      }

      return false;
    }

    if (this.root === null) {
      return false;
    }

    // Remove the root
    if (key === this.root.value) {
      this.root = null;

      return true;
    }

    return key < this.root.value
      ? removeFrom(this.root, this.root.leftNode, key)
      : removeFrom(this.root, this.root.rightNode, key);
  }
}
