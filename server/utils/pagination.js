// utils/pagination.js
const paginate = (data, currentPage, pageSize, totalItems) => {
    currentPage = parseInt(currentPage, 10) || 1;
    pageSize = parseInt(pageSize, 10) || 10;
  
    const totalPages = Math.ceil(totalItems / pageSize);
  
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      pageSize: pageSize,
      currentPageSize: data.length,
      data: data,
    };
  };
  
  module.exports = paginate;
  