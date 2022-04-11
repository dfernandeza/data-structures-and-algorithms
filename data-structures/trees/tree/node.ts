export class Node<T = number> {
  value: T;
  children: Node<T>[] = [];

  constructor(value: T) {
    this.value = value;
  }
}
