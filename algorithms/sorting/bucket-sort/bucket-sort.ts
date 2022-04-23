import { insertionSort } from '../insertion-sort/insertion-sort';

function createBuckets(list: number[], bucketSize: number) {
  let min = list[0];
  let max = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }

    if (list[i] > max) {
      max = list[i];
    }
  }

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets: number[][] = new Array(bucketCount).fill(null).map((_) => []);

  for (let i = 0; i < list.length; i++) {
    const bucket = Math.floor((list[i] - min) / bucketSize);
    buckets[bucket].push(list[i]);
  }

  return buckets;
}

/**
 * @param list
 * @param bucketSize The algorithm executes its best scenario when the elements can be
 * distributed into the buckets evenly. i.e. if the elements are densely allocated, then
 * using fewer buckets is better. By default this function will use a bucket size equal to 3.
 */
export function bucketSort(list: number[], bucketSize = 3) {
  if (list.length < 2) {
    return list;
  }

  const sortedList: number[] = [];
  const buckets = createBuckets(list, bucketSize);

  for (let i = 0; i < buckets.length; i++) {
    const bucket = buckets[i];
    sortedList.push(...insertionSort(bucket));
  }

  return sortedList;
}
