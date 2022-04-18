export function bubbleSort(list: number[]) {
  let unsorted = true;

  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < list.length; i++) {
      if (list[i + 1] < list[i]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        unsorted = true;
      }
    }
  }

  return list;
}
