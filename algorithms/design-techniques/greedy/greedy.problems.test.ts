describe('Greedy algorithms problems', () => {
  describe('Problem 1', () => {
    const value = 186;
    const coins = [1, 5, 10, 25];

    test('Solution 1', () => {
      const result: Record<number, number> = {};
      let amount = value;
      let count = 0;

      for (let i = coins.length - 1; i >= 0; i--) {
        while (coins[i] <= amount) {
          const coinCount = Math.floor(amount / coins[i]);

          result[coins[i]] = result[coins[i]]
            ? result[coins[i]] + coinCount
            : coinCount;

          count += coinCount;
          amount = amount % coins[i];
        }
      }

      expect(count).toBe(9);
      expect(result).toMatchObject({ '1': 1, '10': 1, '25': 7 });
    });
  });
});
