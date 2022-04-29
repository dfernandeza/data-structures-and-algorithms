import { dijkstra } from './dijkstra';

describe('Linear search', () => {
  const graph = [
    [0, 2, 4, 0, 0, 0], // A
    [0, 0, 2, 4, 2, 0], // B
    [0, 0, 0, 0, 3, 0], // C
    [0, 0, 0, 0, 0, 2], // D
    [0, 0, 0, 3, 0, 2], // E
    [0, 0, 0, 0, 0, 0], // F
  ];

  it('finds the shortest path to all the graph vertices', () => {
    expect(dijkstra(graph, 0)).toStrictEqual([0, 2, 4, 6, 4, 6]);
  });
});
