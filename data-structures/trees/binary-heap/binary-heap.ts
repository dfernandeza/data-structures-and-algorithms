export class BinaryHeap<T = number> {
  heap: T[] = [];

  getLeftIndex(index: number) {
    return 2 * index + 1;
  }

  getRightIndex(index: number) {
    return 2 * index + 2;
  }

  getParentIndex(index: number) {
    if (index === 0) {
      return null;
    }

    return index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;
  }
}
