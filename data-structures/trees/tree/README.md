# Tree 🌳

A tree is a type of graph. It is in fact an acyclic graph where there is a root node with zero or more child nodes each child node having zero or more nodes and so on.

```mermaid
flowchart TD
    A --- B
    A --- C
    A --- E
    C --- D
    C --- F
    E --- G
```

## API

- **insert(parent, node):** Inserts a node under the specified parent node.
- **search(value):** Searches a value within the tree.
