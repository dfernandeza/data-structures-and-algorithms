export function heapSort(list: number[]) {
  // Build heap (rearrange array)
  for (var i = Math.floor(list.length / 2) - 1; i >= 0; i--) {
    heapify(list, list.length, i);
  }

  // One by one extract an element from heap
  for (var i = list.length - 1; i > 0; i--) {
    // Move current root to end
    [list[0], list[i]] = [list[i], list[0]];
    // call max heapify on the reduced heap
    heapify(list, i, 0);
  }

  return list;
}

// Heapify the subtree rooted with node index which is an index in list
function heapify(list: number[], size: number, index: number) {
  var largest = index; // Initialize largest as root
  var l = 2 * index + 1; // left = 2 * i + 1
  var r = 2 * index + 2; // right = 2 * i + 2

  // If left child is larger than root
  if (l < size && list[l] > list[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < size && list[r] > list[largest]) largest = r;

  // If largest is not root
  if (largest !== index) {
    [list[index], list[largest]] = [list[largest], list[index]];

    // Recursively heapify the affected sub-tree
    heapify(list, size, largest);
  }
}
