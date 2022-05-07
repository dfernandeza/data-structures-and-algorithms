describe('Dynamic programming problems', () => {
  describe('Problem 1', () => {
    test('Solution 1', () => {
      //    A  B  C  D  G  H
      // A [1] 1  1  1  1  1
      // E  1  1  1  1  1  1
      // D  1  1  1 [2] 2  2
      // F  1  1  1  2  2  2
      // H  1  1  1  2  2 [3]
      // R  1  1  1  2  2 *3* -> Result

      const strA = 'ABCDGH';
      const strB = 'AEDFHR';
      const matrix: number[][] = [];

      for (let i = 0; i <= strA.length; i++) {
        matrix[i] = [];
        for (let j = 0; j <= strB.length; j++) {
          matrix[i][j] = 0;
        }
      }

      for (let i = 1; i <= strA.length; i++) {
        for (let j = 1; j <= strB.length; j++) {
          if (strB[i - 1] === strA[j - 1]) {
            matrix[i][j] = matrix[i][j - 1] + 1;
          } else {
            if (matrix[i][j - 1] === 0 || matrix[i - 1][j] > matrix[i][j - 1]) {
              matrix[i][j] = matrix[i - 1][j];
            } else {
              matrix[i][j] = matrix[i][j - 1];
            }
          }
        }
      }

      // LCS for input Sequences 'ABCDGH' and 'AEDFHR' is 'ADH' of length 3.
      expect(matrix[strB.length][strA.length]).toBe(3);
    });
  });
});
