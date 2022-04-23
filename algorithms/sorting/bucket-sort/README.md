# Bucket sort (also known as bin sort)

Separates the elements into different "buckets" (smaller arrays) and then uses a simpler algorithm, such as the insertion sort to sort each bucket. It then merges all the buckets into the resultant sorted array.

- **Runtime:** O(n + k) (worst case O(n^2))
- **Memory:** O(n + k)
