import { Queue } from './queue';

describe('Queue', () => {
  describe('Basic functioning', () => {
    const queue = new Queue();

    describe('enqueue', () => {
      it('should enqueue elements to the queue', () => {
        queue.enqueue(9);
        queue.enqueue(5);
        queue.enqueue(27);
        queue.enqueue(4);

        expect(queue.toString()).toBe('[4][27][5][9]');
      });
    });

    describe('peek', () => {
      it('should return the next element in the queue', () => {
        expect(queue.peek()).toBe(9);

        expect(queue.toString()).toBe('[4][27][5][9]');
      });
    });

    describe('dequeue', () => {
      it('should remove and return the next element in the queue', () => {
        queue.dequeue();

        expect(queue.peek()).toBe(5);
        expect(queue.toString()).toBe('[4][27][5]');
      });
    });

    describe('isEmpty', () => {
      it('should return a boolean indicating whether the queue is empty or not', () => {
        expect(queue.isEmpty()).toBe(false);

        // flush the queue
        let current = queue.dequeue();
        while (current) {
          current = queue.dequeue();
        }

        expect(queue.isEmpty()).toBe(true);
      });
    });
  });
});
