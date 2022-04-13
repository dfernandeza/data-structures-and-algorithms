export class Node<T = number> {
  leftNode: Node<T> | null = null;
  rightNode: Node<T> | null = null;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}
