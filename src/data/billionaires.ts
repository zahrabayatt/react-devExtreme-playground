export const billionaires = (() => {
  const data = [
    { country: "China", amount: 3 },
    { country: "United States", amount: 10 },
    { country: "India", amount: 11 },
  ];
  const total = data.reduce((sum, item) => sum + item.amount, 0);
  return data.map((item) => ({
    ...item,
    percentage: ((item.amount / total) * 100).toFixed(2), // Compute percentage and round to 2 decimals
  }));
})();
