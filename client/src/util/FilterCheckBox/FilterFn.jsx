
const FilterFn = (filters, query) => (item) => {
  const filterItem = (filterObj, data) =>
    Object.values(filterObj).reduce((acc, fn) => {
      acc.push(fn(data));
      return acc;
    }, []);

  return (
    filterItem(filters, item)
      .map((str) => str.toLowerCase())
      .join()
      .search(query) !== -1
  );
};

export default FilterFn;
