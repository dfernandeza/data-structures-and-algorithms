import { Stack } from './stack';

// You can find the problem descriptions in ./README.md
describe('Stack', () => {
  describe('Problem 1', () => {
    /**
     * Time complexity: O(n^2)
     * Space complexity: O(n)
     */
    test('Solution 1', () => {
      const stack = new Stack();

      stack.push(4);
      stack.push(2);
      stack.push(1);
      stack.push(3);

      expect(stack.toString()).toBe('[4][2][1][3]');

      const auxStack = new Stack();

      while (!stack.isEmpty()) {
        const temp = stack.pop();

        while (!auxStack.isEmpty() && temp! > auxStack.peek()!) {
          stack.push(auxStack.pop()!);
        }

        auxStack.push(temp!);
      }

      while (!auxStack.isEmpty()) {
        stack.push(auxStack.pop()!);
      }

      expect(stack.toString()).toBe('[1][2][3][4]');
    });
  });

  describe('Problem 2', () => {
    /**
     * Time complexity: O(n) ?
     * Space complexity: O(n) ?
     */
    test('Solution 1', () => {
      function baseConverter(num: number, base: number) {
        const stack = new Stack();
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        while (num) {
          const rem = Math.floor(num % base);
          stack.push(rem);

          num = Math.floor(num / base);
        }

        let output = '';
        while (!stack.isEmpty()) {
          output += digits[stack.pop()!];
        }

        return output;
      }

      expect(baseConverter(10, 2)).toBe('1010');
      expect(baseConverter(100345, 16)).toBe('187F9');
    });
  });
});
