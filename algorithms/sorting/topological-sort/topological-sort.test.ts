import { Graph } from '../../../data-structures/graph/graph';

import { topSort } from './topological-sort';

describe('Topological sort', () => {
  const graph = new Graph(true);

  graph.addEdge(5, 2);
  graph.addEdge(5, 0);
  graph.addEdge(4, 0);
  graph.addEdge(4, 1);
  graph.addEdge(2, 3);
  graph.addEdge(3, 1);

  it('sorts', () => {
    const output = topSort(graph);

    expect(output).toStrictEqual([4, 5, 0, 2, 3, 1]);
  });
});
