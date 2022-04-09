export class Vertex<T = number> {
  value: T;
  edges: Vertex<T>[] = [];

  constructor(value: T) {
    this.value = value;
  }
}
