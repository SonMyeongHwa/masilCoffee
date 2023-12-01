
function sliceTen({ currentPage, pageSize, initDataSet }) {
  const slicedData = initDataSet.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return slicedData;
}

export default sliceTen;
