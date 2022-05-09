describe('Backtracking problems', () => {
  describe('Problem 1', () => {
    const maze = [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 1, 1, 1],
    ];

    test('Solution 1', () => {
      const n = maze.length;
      const solution = [];

      for (let i = 0; i < n; i++) {
        solution[i] = Array.from({ length: n }, () => 0);
      }

      function solveMaze(
        maze: number[][],
        solution: number[][],
        i: number,
        j: number
      ): boolean {
        const n = maze.length;

        if (i > n - 1 || j > n - 1) {
          return false;
        }

        if (i === n - 1 && j === n - 1) {
          solution[i][j] = 1;
          return true;
        }

        if (maze[i][j] !== 0) {
          solution[i][j] = 1;

          if (solveMaze(maze, solution, i, j + 1)) {
            return true;
          }

          if (solveMaze(maze, solution, i + 1, j)) {
            return true;
          }

          // Backtrack
          solution[i][j] = 0;
        }

        return false;
      }

      solveMaze(maze, solution, 0, 0);

      expect(solution).toStrictEqual([
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 1],
      ]);
    });
  });
});
