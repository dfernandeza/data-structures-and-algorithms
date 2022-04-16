import { BinaryHeap } from '../binary-heap';

export class MinHeap<T = number> extends BinaryHeap<T> {
  insert(value: T) {
    this.heap.push(value);

    this.#siftUp(this.heap.length - 1);
  }

  extract() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.shift();
    }

    const min = this.heap[0];
    const last = this.heap.pop();

    this.heap[0] = last as T;

    this.#siftDown(0);

    return min;
  }

  #siftUp(index: number) {
    let parentIndex = this.getParentIndex(index);

    while (parentIndex !== null && this.heap[parentIndex] > this.heap[index]) {
      this.#swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  #siftDown(index: number) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getLeftIndex(index);
    let element = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[index]
    ) {
      element = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[index]
    ) {
      element = rightIndex;
    }

    if (element !== index) {
      this.#swap(element, index);
      this.#siftDown(element);
    }
  }

  #swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
