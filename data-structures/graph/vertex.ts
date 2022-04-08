export class Vertex {
  value: string | number;
  edges: Vertex[] = [];

  constructor(value: number | string) {
    this.value = value;
  }
}
