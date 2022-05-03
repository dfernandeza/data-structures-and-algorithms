export function binarySearch<T = number>(list: T[], value: T) {
  let start = 0;
  let end = list.length - 1;

  while (end >= start) {
    const middle = start + Math.floor((end - start) / 2);

    if (list[middle] === value) {
      return middle;
    }

    if (value > list[middle]) {
      start = middle + 1;
    }

    if (value < list[middle]) {
      end = middle - 1;
    }
  }

  return -1;
}

export function recursiveBinarySearch<T = number>(
  list: T[],
  value: T,
  start: number,
  end: number
): number {
  if (start >= end) {
    return -1;
  }

  const middle = Math.floor((end + start) / 2);

  // Base case
  if (list[middle] === value) {
    return middle;
  }

  return list[middle] < value
    ? recursiveBinarySearch(list, value, middle + 1, end)
    : recursiveBinarySearch(list, value, start, middle - 1);
}
