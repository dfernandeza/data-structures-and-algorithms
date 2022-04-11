import { Node } from './node';

export class Tree<T> {
  root: Node<T> | null = null;

  constructor(root: T) {
    this.root = new Node(root);
  }

  #traverse(node: Node<T> | null, callback: (node: Node<T>) => void) {
    if (!node) {
      return;
    }

    callback(node);

    for (const child of node.children) {
      callback(child);
      this.#traverse(child, callback);
    }
  }

  insert(parent: T, node: T) {
    const parentNode = this.search(parent);

    if (!parentNode) {
      return false;
    }

    let inserted = false;
    this.#traverse(parentNode, (visitedNode) => {
      if (parentNode.value === visitedNode.value) {
        visitedNode.children.push(new Node(node));
        inserted = true;
      }
    });

    return inserted;
  }

  search(value: T): Node<T> | undefined {
    let found = undefined;

    this.#traverse(this.root, (node) => {
      if (node.value === value) {
        found = node;
      }
    });

    return found;
  }
}
