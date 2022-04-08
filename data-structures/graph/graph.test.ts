import { Graph } from './graph';

describe('Graph', () => {
  describe('Basic functioning', () => {
    describe('Undirected graph', () => {
      const graph = new Graph();

      it('addVertex', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');

        expect(graph.toString()).toBe(`\nA -- \nB -- \nC -- \n`);
      });

      it('addVertex', () => {
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');

        expect(graph.toString()).toBe(`\nA -- B C \nB -- A \nC -- A \n`);
      });
    });

    describe('Directed graph', () => {
      const graph = new Graph(true);

      it('addVertex', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');

        expect(graph.toString()).toBe(`\nA -> \nB -> \nC -> \n`);
      });

      it('addVertex', () => {
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');

        expect(graph.toString()).toBe(`\nA -> B C \nB -> \nC -> \n`);
      });
    });
  });
});
