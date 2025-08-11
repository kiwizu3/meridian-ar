export const getInitialSelectedValues = (filters: any) => {
  const initialSelectedValues: any = {};
  filters.forEach((filter: any) => {
    initialSelectedValues[filter.key] = filter.items
      .filter((item: any) => item.isChecked)
      .map((item: any) => item.key);
  });
  return initialSelectedValues;
};
