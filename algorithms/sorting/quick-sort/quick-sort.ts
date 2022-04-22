function quick(list: number[], left: number, right: number) {
  if (list.length < 2) {
    return list;
  }

  const pivot = list[Math.floor((right + left) / 2)];

  let i = left;
  let j = right;

  while (i <= j) {
    while (list[i] < pivot) {
      i++;
    }

    while (list[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [list[i], list[j]] = [list[j], list[i]];
      i++;
      j--;
    }
  }

  if (left < i - 1) {
    quick(list, left, i - 1);
  }

  if (i < right) {
    quick(list, i, right);
  }

  return list;
}

export function quickSort(list: number[]) {
  return quick(list, 0, list.length - 1);
}
