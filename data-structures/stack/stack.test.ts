import { Stack } from './stack';

describe("Stack", () => {
  describe('Basic functioning', () => {
    const stack = new Stack();

    describe('push', () => {
      it('should push elements to the stack', () => {
        stack.push(9);
        stack.push(5);
        stack.push(27);
        stack.push(4);

        expect(stack.toString()).toBe('[9][5][27][4]');
      });
    });

    describe('peek', () => {
      it('should return the first element in the stack', () => {
        expect(stack.peek()).toBe(4);

        expect(stack.toString()).toBe('[9][5][27][4]');
      });
    });

    describe('pop', () => {
      it('should remove the first element in the stack', () => {
        stack.pop();

        expect(stack.peek()).toBe(27);
        expect(stack.toString()).toBe('[9][5][27]');
      });
    });

    describe('isEmpty', () => {
      it('should return a boolean indicating whether the stack is empty or not', () => {
        expect(stack.isEmpty()).toBe(false);

        // flush the stack
        let current = stack.pop();
        while (current) {
          current = stack.pop();
        }

        expect(stack.isEmpty()).toBe(true);
      });
    });

  });
});
