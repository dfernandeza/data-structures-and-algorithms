function merge(listA: number[], listB: number[]) {
  let temp: number[] = [];
  let i = 0;
  let j = 0;

  while (i < listA.length && j < listB.length) {
    temp.push(listA[i] < listB[j] ? listA[i++] : listB[j++]);
  }

  return [...temp, ...listA.slice(i), ...listB.slice(j)];
}

export function mergeSort(list: number[]): number[] {
  if (list.length < 2) {
    return list;
  }

  const splitAt = Math.floor(list.length / 2);

  return merge(
    mergeSort(list.slice(0, splitAt)),
    mergeSort(list.slice(splitAt))
  );
}
