export class Node {
  value: number;
  next: Node | null = null;
  prev: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}
