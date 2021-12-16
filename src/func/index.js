export const toCurrency = price => {
  return new Intl.NumberFormat('usa', {
    currency: 'USD',
    style: 'currency',
  }).format(price);
};
