export const toEur = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'EUR',
  useGrouping: false,
});
