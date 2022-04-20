function min(list: number[], start: number) {
  let min = start;

  for (let i = start + 1; i < list.length; i++) {
    if (list[i] < list[min]) {
      min = i;
    }
  }

  return min;
}

export function selectionSort(list: number[]) {
  for (let i = 0; i < list.length; i++) {
    const minIndex = min(list, i);
    [list[i], list[minIndex]] = [list[minIndex], list[i]];
  }

  return list;
}
