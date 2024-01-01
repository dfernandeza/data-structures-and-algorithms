import { Stack } from "../stack/stack";

// You can find the problem descriptions in ./README.md
describe("Array", () => {
  describe("Problem 1", () => {
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
    test("Solution 1", () => {
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
    test("Solution 2 (in place)", () => {
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

  describe("Problem 2", () => {
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     */
    test("Solution 1", () => {
      const arr = [4, 5, 2, 25];
      const stack = new Stack();
      const ans = [];

      stack.push(arr[0]);

      for (let i = 1; i < arr.length; i++) {
        while (!stack.isEmpty() && stack.peek()! < arr[i]) {
          ans.push([stack.pop(), arr[i]]);
        }

        stack.push(arr[i]);
      }

      while (!stack.isEmpty()) {
        ans.push([stack.pop(), -1]);
      }

      expect(ans).toStrictEqual([
        [4, 5],
        [2, 25],
        [5, 25],
        [25, -1],
      ]);
    });
  });

  describe("Problem 3", () => {
    /**
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
    test("Solution 1", () => {
      const nums1 = [1, 2, 3, 0, 0, 0];
      const m = 3;
      const nums2 = [2, 5, 6];
      const n = 3;

      var merge = function (
        nums1: number[],
        m: number,
        nums2: number[],
        n: number
      ) {
        // Go backwards comparing the bigger numbers
        // `nums1` amount of values and `nums2` together equals full length of nums1
        let back = n + m - 1;
        // Both are decrease since we start with 0 in code not 1
        n--;
        m--;
        // Since `nums1` should always be returned. We only care as long as `n` is greater than 0.
        // `nums1` is sorted. Once there are no more `nums2`, everything else is sorted
        while (n >= 0) {
          // If `m` exists, check if `nums1` is bigger than `nums2`
          if (m >= 0 && nums1[m] > nums2[n]) {
            nums1[back] = nums1[m];
            m--;
          } else {
            nums1[back] = nums2[n];
            n--;
          }

          back--;
        }

        return nums1;
      };

      expect(merge(nums1, m, nums2, n)).toStrictEqual([1, 2, 2, 3, 5, 6]);
    });
  });

  describe("Problem 4", () => {
    /**
     * Time complexity: O(n * m)
     * Space complexity: O(1)
     */
    test("Solution 1", () => {
      // Input: X[] = [2, 1, 6], Y = [1, 5]
      // Output: 3
      // Explanation: There are total 3 pairs where pow(x, y) is greater than pow(y, x)
      // Pairs are (2, 1), (2, 5) and (6, 1)

      // TODO: https://www.geeksforgeeks.org/find-number-pairs-xy-yx/

      const X = [2, 1, 6];
      const Y = [1, 5];

      let result = 0;

      for (let x = 0; x < X.length; x++) {
        for (let y = 0; y < Y.length; y++) {
          if (Math.pow(x, y) > Math.pow(y, x)) {
            result++;
          }
        }
      }

      expect(result).toBe(3);
    });
  });

  describe("Problem 5", () => {
    /**
     * Time complexity: O(n)
     * Space complexity: O(n)
     */
    test("Solution 1", () => {
      const x = [1, 2, 3, 4];
      const y = [3, 4, 5, 6];

      function diff(x: number[], y: number[]): number[] {
        const xMap = new Map(x.map((n) => [n, n]));
        const yMap = new Map(y.map((n) => [n, n]));

        return [
          ...x.filter((n) => !yMap.has(n)),
          ...y.filter((n) => !xMap.has(n)),
        ];
      }

      expect(diff(x, y).toString()).toBe("1,2,5,6");
    });
  });

  describe("Problem 6", () => {
    /**
     * Time complexity: O(mn)
     * Space complexity: O(n)
     */
    test("Solution 1", () => {
      const k = [0, 4, 1, 0, 4];

      function solution(k: number[]) {
        const max = Math.max(...k);
        let x = max - 1;

        for (let i = x; i >= 0; i--) {
          let times = 0;
          for (let j = 0; j < k.length; j++) {
            if (k[j] >= i) {
              times += 1;
            }
          }

          if (i === times) {
            return i;
          }
        }

        return -1;
      }

      expect(solution(k)).toBe(2);
    });
  });

  describe("Problem 7", () => {
    /**
     * Time complexity: O(n)
     * Space complexity: O(1)
     */
    test("Solution 1", () => {
      const arr1 = [1, 5, 3, 2];
      const arr2 = [1, 3, 2, 1, 4, 5];

      function solution(arr: number[]) {
        // Sort first to make sure the min value is maximized
        arr.sort((a, b) => a - b);

        // sum all the min items. Min items are now placed at the even indexes ar[0], arr[2], arr[4], ...
        return arr.reduce((sum, num, i) => {
          if (i % 2 === 0) {
            sum += num;
          }

          return sum;
        }, 0);
      }

      expect(solution(arr1)).toBe(4);
      expect(solution(arr2)).toBe(7);
    });
  });
});
