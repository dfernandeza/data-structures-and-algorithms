# Topological Sort

Takes a directed acyclic graph and returns an array of the nodes where each node appears before all the nodes it points to.

- There can be more than one topological sorting for the same graph.
- The first vertex in topological sorting is always a vertex with in-degree as 0 (a vertex with no incoming edges).

- **Runtime:** O(v + e) (where v is the number of vertices and e is the number of edges)
- **Memory:** O(v)
