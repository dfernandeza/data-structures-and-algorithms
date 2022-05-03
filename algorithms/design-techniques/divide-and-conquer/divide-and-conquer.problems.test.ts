// You can find the problem descriptions in ./README.md
describe('Divide and conquer problems', () => {
  describe('Problem 1', () => {
    const arr = [-2, -5, 6, -2, -3, 1, 5, -6];

    test('Solution 1', () => {
      function middleMaxSum(
        arr: number[],
        left: number,
        middle: number,
        right: number
      ) {
        let leftSum = 0;
        let maxLeftSum = Number.MIN_SAFE_INTEGER;
        for (let i = middle; i >= left; i--) {
          leftSum += arr[i];

          if (leftSum > maxLeftSum) {
            maxLeftSum = leftSum;
          }
        }

        let rightSum = 0;
        let maxRightSum = Number.MIN_SAFE_INTEGER;
        for (let i = middle + 1; i <= right; i++) {
          rightSum += arr[i];

          if (rightSum > maxRightSum) {
            maxRightSum = rightSum;
          }
        }

        return Math.max(maxLeftSum + maxRightSum, maxLeftSum, maxRightSum);
      }

      function maxSum(arr: number[], left: number, right: number): number {
        // Base case
        if (left === right) {
          return arr[left];
        }

        const middle = Math.floor((left + right) / 2);

        return Math.max(
          maxSum(arr, left, middle),
          middleMaxSum(arr, left, middle, right),
          maxSum(arr, middle + 1, right)
        );
      }

      expect(maxSum(arr, 0, arr.length - 1)).toBe(7);
    });
  });
});
