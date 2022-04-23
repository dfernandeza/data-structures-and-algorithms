export function countingSort(list: number[]) {
  if (list.length < 2) {
    return list;
  }

  const max = Math.max(...list);
  const counts: number[] = new Array(max + 1).fill(0);

  for (let i = 0; i < list.length; i++) {
    counts[list[i]]++;
  }

  const sortedList = [];

  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      sortedList.push(i);
      counts[i]--;
    }
  }

  return sortedList;
}
