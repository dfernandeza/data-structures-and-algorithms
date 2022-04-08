import { Stack } from './stack';

describe('Stack', () => {
  describe('Sort stack: Sort a stack in ascending order (with smallest items on top). You may use at most one additional stack to hold items, but you may not copy the elements into any other data structure (e.g. array).', () => {
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

  describe('Base converter: Write a converter from decimal to the bases between 2 and 36', () => {
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
