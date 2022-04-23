function countingSort(
  list: number[],
  radixBase: number,
  significantDigit: number
) {
  const aux: number[] = [];
  const counts: number[] = new Array(radixBase).fill(0);

  // Store count of occurrences in counts[]
  for (let i = 0; i < list.length; i++) {
    counts[Math.floor(list[i] / significantDigit) % radixBase]++;
  }

  // Change counts[i] so that counts[i] now contains the actual position
  // of this digit in aux[]
  for (let i = 1; i < radixBase; i++) {
    counts[i] += counts[i - 1];
  }

  // Build the aux array
  for (let i = list.length - 1; i >= 0; i--) {
    const bucketIndex = Math.floor(list[i] / significantDigit) % radixBase;

    aux[--counts[bucketIndex]] = list[i];
  }

  // Copy the aux array to list[], so that list[] now
  // contains sorted numbers according to current digit
  for (let i = 0; i < list.length; i++) {
    list[i] = aux[i];
  }
}

export function radixSort(list: number[], radixBase = 10) {
  if (list.length < 2) {
    return list;
  }

  const max = Math.max(...list);

  for (let digit = 1; Math.floor(max / digit) > 0; digit *= radixBase) {
    countingSort(list, radixBase, digit);
  }

  return list;
}
