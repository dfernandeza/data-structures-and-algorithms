# Dijkstra

A greedy algorithm to calculate the shortest path between a single source and all other sources in a weighted directed graph.

**All edges must have positive values.**

```mermaid
flowchart LR
  A --2--> B
  A --4--> C
  B --2--> C
  B --4--> D
  B --2--> E
  C --3--> E
  E --3--> D
  D --2--> F
  E --2--> F
```

- **Runtime:** O(v^2) (where v is the number of vertices)
- **Memory:**
