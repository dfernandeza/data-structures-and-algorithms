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

  describe('Problem 2', () => {
    const arr = [2, 4, 1, 3, 5];

    test('Solution 1', () => {
      function merge(
        [leftSubArr]: [number[], number],
        [rightSubArr]: [number[], number]
      ): [number[], number] {
        const arr = [];
        let i = 0;
        let j = 0;

        let swaps = 0;

        while (i < leftSubArr.length && j < rightSubArr.length) {
          if (leftSubArr[i] < rightSubArr[j]) {
            arr.push(leftSubArr[i++]);
          } else {
            arr.push(rightSubArr[j++]);
            // because left and right sub-arrays are sorted,
            // so all the remaining elements in left-subarray
            // (a[i+1], a[i+2] … a[mid]) will be greater than a[j].
            swaps += leftSubArr.length + 1 - j;
          }
        }

        return [
          [...arr, ...leftSubArr.slice(i), ...rightSubArr.slice(j)],
          swaps,
        ];
      }

      function getInversionCount([arr, swaps]: [number[], number]): [
        number[],
        number
      ] {
        // O(n^2)
        // for (let i = 0; i < arr.length; i++) {
        //   for (let j = 0; j < arr.length; j++) {
        //     if (i === j) { continue; }

        //     if (i < j && arr[i] > arr[j]) {
        //       result.push([arr[i], arr[j]]);
        //     }
        //   }
        // }

        if (arr.length === 1) {
          return [arr, swaps];
        }

        const mid = Math.floor(arr.length / 2);
        const left = getInversionCount([arr.slice(0, mid), swaps]);
        const right = getInversionCount([arr.slice(mid, arr.length), swaps]);

        return merge(left, right);
      }

      expect(getInversionCount([arr, 0])).toStrictEqual([[1, 2, 3, 4, 5], 3]);
    });
  });
});
