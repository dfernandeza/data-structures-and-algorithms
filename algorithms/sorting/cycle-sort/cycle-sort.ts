// This implementation assumes that the list contains continuous numbers from `1` to `n`
export function cycleSort(list: number[]) {
  let i = 0;
  // the correct position for `list[i]` will always be `list[i] - 1`
  let position = list[i] - 1;

  while (i < list.length) {
    position = list[i] - 1;

    if (position !== i) {
      // swap
      [list[position], list[i]] = [list[i], list[position]];
    } else {
      i++;
    }
  }

  return list;
}
