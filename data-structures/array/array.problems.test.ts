// You can find the problem descriptions in ./README.md
describe('Array', () => {
  describe('Problem 1', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const rotatedMatrix = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ];

    /**
     * Time complexity: O(n2)
     * Space complexity: O(n2)
     */
    test('Solution 1', () => {
      const n = matrix.length;
      const result: number[][] = [];

      for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 0; j--) {
          if (!result[i]) {
            result[i] = [matrix[j][i]];
          } else {
            result[i].push(matrix[j][i]);
          }
        }
      }

      expect(result).toEqual(rotatedMatrix);
    });

    /**
     * Time complexity: O(n2)
     * Space complexity: O(1)
     */
    test('Solution 2 (in place)', () => {
      const n = matrix.length;

      for (let layer = 0; layer < n / 2; layer++) {
        const first = layer;
        const last = n - 1 - layer;

        for (let i = first; i < last; i++) {
          const offset = i - first;

          // Start swapping
          const top = matrix[first][i];

          // left goes to top
          matrix[first][i] = matrix[last - offset][first];

          // bottom goes to left
          matrix[last - offset][first] = matrix[last][last - offset];

          // right goes to bottom
          matrix[last][last - offset] = matrix[i][last];

          // top goes to right
          matrix[i][last] = top;
        }
      }

      expect(matrix).toEqual(rotatedMatrix);
    });
  });
});
