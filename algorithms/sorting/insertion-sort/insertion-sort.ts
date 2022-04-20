export function insertionSort(list: number[]) {
  for (let i = 1; i < list.length; i++) {
    let j = i;
    let aux = list[i];

    while (list[j - 1] > aux && j > 0) {
      list[j] = list[j - 1];
      j--;
    }

    list[j] = aux;
  }

  return list;
}
