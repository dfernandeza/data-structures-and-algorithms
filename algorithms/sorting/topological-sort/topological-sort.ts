import { Graph } from '../../../data-structures/graph/graph';
import { Vertex } from '../../../data-structures/graph/vertex';
import { Stack } from '../../../data-structures/stack/stack';

function visit(vertex: Vertex, visited: Set<number | string>, ordered: Stack) {
  visited.add(vertex.value);

  for (const edge of vertex.edges) {
    if (!visited.has(edge.value)) {
      visit(edge, visited, ordered);
    }
  }

  ordered.push(vertex.value);
}

export function topSort(graph: Graph) {
  const visited = new Set<number | string>();
  const ordered = new Stack();

  for (const vertex of graph.vertices) {
    if (!visited.has(vertex.value)) {
      visit(vertex, visited, ordered);
    }
  }

  const output = [];
  while (!ordered.isEmpty()) {
    output.push(ordered.pop());
  }

  return output;
}
