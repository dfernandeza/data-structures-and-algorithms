import { Graph } from './graph';
import { Vertex } from './vertex';
import { Queue } from '../queue/queue';

describe('Graph', () => {
  describe('Basic functioning', () => {
    describe('Undirected graph', () => {
      const graph = new Graph<string>();

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
      const graph = new Graph<string>(true);

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

  describe('Search algorithms', () => {
    const graph = new Graph<string>();
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (const vertex of vertices) {
      graph.addVertex(vertex);
    }

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('C', 'G');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('E', 'I');

    describe('Breadth first search', () => {
      const queue = new Queue<Vertex<string>>();
      const visited = new Map<string, number>();

      // Time complexity: O(v + e) `v` is the number of vertices an `e` the number of edges
      test('traverse the graph, one layer at a time', () => {
        const start = graph.vertices[0];

        queue.enqueue(start);

        while (!queue.isEmpty()) {
          const vertex = queue.dequeue();

          visited.set(vertex!.value, 1);

          for (const edge of vertex!.edges) {
            if (!visited.has(edge.value)) {
              queue.enqueue(edge);
            }
          }

          // Here we will do something with vertex
        }

        const order = Array.from(visited.keys()).join(' ');

        expect(order).toBe('A B C D E F G H I');
      });
    });

    describe('Depth first search', () => {
      const visited = new Map<string, number>();

      // Time complexity: O(v + e) `v` is the number of vertices an `e` the number of edges
      test('visits the vertices first deep and then wide', () => {
        function depthFirstSearch(vertex: Vertex<string>) {
          if (!visited.has(vertex.value)) {
            visited.set(vertex.value, 1);
          }

          for (const edge of vertex.edges) {
            if (!visited.has(edge.value)) {
              depthFirstSearch(edge);
            }
          }

          // Here we will do something with vertex
        }

        for (const vertex of graph.vertices) {
          depthFirstSearch(vertex);
        }

        const order = Array.from(visited.keys()).join(' ');

        expect(order).toBe('A B E I F C G D H');
      });
    });
  });
});
