const MAX = Number.MAX_SAFE_INTEGER;

/**
 * Finds the (not yet processed) vertex with minimum distance
 */
function minDistanceVertex(distances: number[], processed: boolean[]) {
  // All distances are initialized to MAX so in order for this to be the min value
  // we need to also initialized to MAX
  let minValue = MAX;
  let minIndex = -1;

  for (let i = 0; i < distances.length; i++) {
    if (processed[i] === false && distances[i] <= minValue) {
      minValue = distances[i];
      minIndex = i;
    }
  }

  return minIndex;
}

// This algorithm time complexity can be reduced to O(edges log vertices) with the help of a binary heap.
export function dijkstra(graph: number[][], start: number) {
  const processed = [];
  const distances = [];

  // Initialize distances with MAX for all but the `start` vertex (distance from start vertex to itself is always 0)
  // Set all vertices as not processed
  for (let i = 0; i < graph.length; i++) {
    distances[i] = i === start ? 0 : MAX;
    processed[i] = false;
  }

  for (let i = 0; i < graph.length; i++) {
    // `min` will always be equal to start in the first iteration
    const min = minDistanceVertex(distances, processed);
    // mark the selected vertex as processed
    processed[min] = true;

    for (let v = 0; v < graph.length; v++) {
      if (
        processed[v] === false &&
        // there is an edge from `min` to `v`
        graph[min][v] !== 0 &&
        distances[min] !== MAX &&
        // total distance of path from `start` to `v` through `min` is smaller
        // than the current distance in distances[v]
        distances[min] + graph[min][v] < distances[v]
      ) {
        // in case the shortest path is found, set the new value for the shortest path
        distances[v] = distances[min] + graph[min][v];
      }
    }
  }

  return distances;
}
